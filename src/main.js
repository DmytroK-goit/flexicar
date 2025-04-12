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
// Listing booking fork
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);
