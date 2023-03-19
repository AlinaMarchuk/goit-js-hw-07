import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
let instance;
let isModalOpen = false;

const str = galleryItems
  .map(
    el =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
  )
  .join('');

container.insertAdjacentHTML('beforeend', str);
container.addEventListener('click', handleClick);
document.addEventListener('keydown', modalClose);

function handleClick(event) {
  event.preventDefault();
  instance = basicLightbox.create(`
    <img src="${event.target.getAttribute('data-source')}">
`);

  instance.show();
  isModalOpen = true;
}

function modalClose(event) {
  if (isModalOpen && event.code === 'Escape') {
    instance.close();
    isModalOpen = false;
  }
}
