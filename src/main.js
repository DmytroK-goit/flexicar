const steps = document.querySelectorAll('.step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const extras = document.querySelectorAll('.extra');
const insuranceOptions = document.querySelectorAll('input[name="insurance"]');
const totalSpan = document.getElementById('total');
const progressFill = document.getElementById('progress-fill');
const stepIndicator = document.getElementById('step-indicator');
const points = document.querySelectorAll('.point');

let current = 0;
const basePrice = 32.98;

function updateTotal() {
  let extrasTotal = 0;
  extras.forEach(extra => {
    if (extra.checked) extrasTotal += Number(extra.value);
  });

  let insurance = document.querySelector('input[name="insurance"]:checked');
  let insuranceTotal = Number(insurance ? insurance.value : 0);

  let total = basePrice + extrasTotal + insuranceTotal;
  totalSpan.textContent = total.toFixed(2);
}

function updateProgress() {
  const stepNum = current + 1;
  const totalSteps = steps.length;
  const percent = (stepNum / totalSteps) * 100;
  progressFill.style.width = percent + '%';
  stepIndicator.textContent = `Step ${stepNum} of ${totalSteps}`;

  points.forEach((point, index) => {
    point.classList.toggle('active', index <= current);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (current < steps.length - 1) {
      steps[current].classList.remove('active');
      current++;
      steps[current].classList.add('active');
      updateTotal();
      updateProgress();
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (current > 0) {
      steps[current].classList.remove('active');
      current--;
      steps[current].classList.add('active');
      updateTotal();
      updateProgress();
    }
  });
});

extras.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotal);
});

insuranceOptions.forEach(radio => {
  radio.addEventListener('change', updateTotal);
});

updateTotal();
updateProgress();
