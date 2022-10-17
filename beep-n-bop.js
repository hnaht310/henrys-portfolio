const patternsContainer = document.querySelector('.patterns-container');
const panels = document.querySelectorAll('.panel');
const patternsList = document.querySelector('.patterns-list');
const patternItems = document.querySelectorAll('.pattern-item');
const smallPrints = document.querySelectorAll('small');

patternsContainer.addEventListener('click', (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains('panel')) {
    const caption = e.target.dataset.caption;
    removeActiveClass(panels, patternItems);
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
    removeActiveClass(panels, patternItems);
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
function removeActiveClass(nodeList1, nodeList2) {
  // remove active class from all cards
  nodeList1.forEach((item) => {
    item.classList.remove('active');
  });
  // remove active class from all list items
  nodeList2.forEach((item) => {
    item.classList.remove('active');
  });
}

// Helper function to add hidden class to hide small prints
function hideSmallPrints() {
  smallPrints.forEach((item) => {
    item.classList.add('hidden');
  });
}

const boardsContainer = document.querySelector('.inspiration-board-container');
const boardsList = document.querySelectorAll('.inspiration-board');
const titlesContainer = document.querySelector('.titles-list');
const boardTitles = document.querySelectorAll('.board-title');

boardsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('inspiration-board')) {
    removeActiveClass(boardsList, boardTitles);
    // add active class to selected board
    e.target.classList.add('active');
    // add active class to respective title
    const caption = e.target.dataset.caption;
    const elements = document.querySelectorAll(`[data-caption=${caption}]`);
    elements.forEach((element) => {
      if (element.classList.contains('board-title')) {
        element.classList.add('active');
      }
    });
  }
});

titlesContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('board-title')) {
    removeActiveClass(boardsList, boardTitles);
    // add active class to selected title
    e.target.classList.add('active');
  }
  //   add active class to respective board
  const caption = e.target.dataset.caption;
  const elements = document.querySelectorAll(`[data-caption=${caption}]`);
  elements.forEach((element) => {
    if (element.classList.contains('inspiration-board')) {
      element.classList.add('active');
    }
  });
});
