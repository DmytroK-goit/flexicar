// document.addEventListener('DOMContentLoaded', function () {
//   const nextButton = document.getElementById('next-section');
//   const nextButtons = document.querySelectorAll('.next-btn');
//   let currentSectionIndex = 0;

//   const sections = document.querySelectorAll('.extra-info');

//   function showNextSection() {
//     if (currentSectionIndex < sections.length - 1) {
//       sections[currentSectionIndex].classList.remove('active');
//       currentSectionIndex++;
//       sections[currentSectionIndex].classList.add('active');
//     }
//   }
//   if (nextButton) {
//     nextButton.addEventListener('click', function () {
//       sections[currentSectionIndex].classList.add('active');
//     });
//   }

//   nextButtons.forEach(button => {
//     button.addEventListener('click', showNextSection);
//   });
// });

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
