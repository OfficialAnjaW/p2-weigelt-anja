// 1. HAMBURGER MENU

// 2. POP-UP AD

// 3. ACCORDION

// Variables
const accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
const accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

// Accordion Dropdown Action
function expandAccordionDescription() {

  for (i = 0; i < accordionHeaders.length; i++) {
    //Toggle Indicators
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    //Hide Accordion Descriptions
    accordionDescriptions[i].classList.remove('accordion-open');
  }

  //Make Hidden Description Appear
  this.nextElementSibling.classList.toggle('accordion-open');

  //Switch from Plus Sign to Minus Sign when Toggled
  this.childNodes[3].innerHTML = '-';

}

// Add Click Event Listener for Accordion Headers
for (i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}
