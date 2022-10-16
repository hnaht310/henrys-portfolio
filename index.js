const fullOverlay = document.querySelector('.overlay-full-img');
const projectImgs = document.querySelectorAll('.project-img');
const imgContainers = document.querySelectorAll('.img-container');
const highResImgs = document.querySelectorAll('.high-res-img');

// display high resolution image
imgContainers.forEach((container) => {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-img')) {
      // find the data-caption of the clicked element
      const caption = e.target.dataset.caption;
      //   remove hidden classes from overlay and high-res image
      fullOverlay.classList.remove('hidden');
      const elements = document.querySelectorAll(`[data-caption=${caption}]`);
      elements.forEach((element) => {
        if (element.classList.contains('high-res-img')) {
          element.classList.remove('hidden');
        }
      });
    }
  });
});

// hide image:
fullOverlay.addEventListener('click', (e) => {
  highResImgs.forEach((img) => {
    img.classList.add('hidden');
  });
  fullOverlay.classList.add('hidden');
});
