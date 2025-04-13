// Toggle btn
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      const isPlus = img.src.includes('plus.png');

      img.src = isPlus ? img.dataset.minus : img.dataset.plus;
      img.alt = isPlus ? 'Minus' : 'Plus';
      const li = button.closest('.extra-item');
      li.classList.toggle('active');

      button.classList.toggle('active');
    });
  });
});
// Insurance Click
document.querySelectorAll('.insurance-item').forEach(item => {
  item.addEventListener('click', () => {
    document
      .querySelectorAll('.insurance-item')
      .forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
// Listing booking fork and progress bar
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const progressBarWrapper = document.getElementById('progressBarWrapper');
const progressFill = document.getElementById('progressFill');
const stepIcons = document.querySelectorAll('.step-icon');
const blockWithCar = document.querySelector('.block-with-car');
const progBarWrap = document.querySelector('.progress-bar-wrapper');

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });

  if (index === 0) {
    nextBtn.textContent = 'Proceed to Booking';
    nextBtn.style.display = 'block';
  } else if (index === 1 || index === 2) {
    nextBtn.textContent = 'Continue';
    nextBtn.style.display = 'block';
  } else if (index === 3) {
    nextBtn.style.display = 'none';
    blockWithCar.style.display = 'none';
    progBarWrap.style.height = '50px';
    progBarWrap.style.background = 'inherit';
  }

  progressBarWrapper.style.display =
    index >= 1 && index <= 3 ? 'block' : 'none';

  const progressPercent = (index / 4) * 100;
  progressFill.style.width = `${progressPercent}%`;

  stepIcons.forEach((icon, i) => {
    if (i < index) {
      icon.src = './img/images/indicatorsDone.png';
    } else if (i === index) {
      icon.src = './img/images/Indicators.png';
    } else {
      icon.src = './img/images/Indicators_notFill.png';
    }
  });
}

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

showStep(currentStep);
