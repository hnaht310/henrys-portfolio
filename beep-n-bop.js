const patternsContainer = document.querySelector('.patterns-container');
const panels = document.querySelectorAll('.panel');
const patternsList = document.querySelector('.patterns-list');
const patternItems = document.querySelectorAll('.pattern-item');
const smallPrints = document.querySelectorAll('small');

patternsContainer.addEventListener('click', (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains('panel')) {
    const caption = e.target.dataset.caption;
    removeActiveClass();
    hideSmallPrints();
    // find the elements with the same data-caption:
    const elements = document.querySelectorAll(`[data-caption=${caption}]`);
    // add active class to the elements
    elements.forEach((element) => {
      element.classList.add('active');
      //   find the small element and display it
      if (element.firstElementChild) {
        const smallElement = element.firstElementChild;
        smallElement.classList.remove('hidden');
      }
    });
  }
});

patternsList.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('pattern-item')) {
    const clicked = e.target;
    const caption = clicked.dataset.caption;
    removeActiveClass();
    hideSmallPrints();
    // add the hidden class back to the selected item
    clicked.firstElementChild.classList.remove('hidden');
    // find the elements with the same data-caption:
    const elements = document.querySelectorAll(`[data-caption=${caption}]`);
    // add active class to the elements
    elements.forEach((element) => {
      element.classList.add('active');
    });
  }
});

// Helper function to remove active class from cards and list items
function removeActiveClass() {
  // remove active class from all panel cards
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
  // remove active class from all pattern items
  patternItems.forEach((item) => {
    item.classList.remove('active');
  });
}

// Helper function to add hidden class to hide small prints
function hideSmallPrints() {
  smallPrints.forEach((item) => {
    item.classList.add('hidden');
  });
}

// // ✅ Get all elements with `data-id` attribute
// const elements1 = document.querySelectorAll('[data-id]');
// console.log(elements1); // 👉️ [div, div]

// // ✅ Get only DIV elements with `data-id` attribute
// const elements2 = document.querySelectorAll('div[data-id]');
// console.log(elements2); // 👉️ [div, div]

// // ✅ Get only elements where data-id = box1
// const elements3 = document.querySelectorAll(`[data-id="box1"]`);
// console.log(elements3); // 👉️ [div]
