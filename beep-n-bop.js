const patternsContainer = document.querySelector('.patterns-container');
const panels = document.querySelectorAll('.panel');
const patternsList = document.querySelector('.patterns-list');
const pattern = document.querySelectorAll('.pattern-item');

patternsContainer.addEventListener('click', (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains('panel')) {
    // remove active class from all panels
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
    // add active class to clicked panel
    e.target.classList.add('active');
  }
});

patternsList.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('pattern-item')) {
    console.log(e.target);
  }
});
