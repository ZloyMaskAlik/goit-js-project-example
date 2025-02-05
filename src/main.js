import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


new Accordion(".accordion-container", {
  duration: 900,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  }
});





// document.querySelectorAll('.faq-accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const content = header.nextElementSibling;
//     const icon = header.querySelector('.faq-icon');
//     const isVisible = content.style.display === 'block';

//     // Закрити всі контенти
//     document
//       .querySelectorAll('.faq-accordion-content')
//       .forEach(c => (c.style.display = 'none'));
//     document.querySelectorAll('.faq-icon').forEach(i => (i.textContent = '+')); // скинути іконки

//     // Відкрити обране
//     if (!isVisible) {
//       content.style.display = 'block';
//       icon.textContent = '#'; // змінити іконку на "#"
//     }
//   });
// });
