// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Import opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// const SimpleLightbox = window.SimpleLightbox; // how to tell the difference

// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

let templates = galleryItems
  .map(
    item => `
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}" title="${item.description}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>
`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', templates);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
