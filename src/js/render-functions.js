// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
      <div class="info">
  <div class="info-item">
    <p class="info-label">Likes</p>
    <p class="info-value">${likes}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Views</p>
    <p class="info-value">${views}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Comments</p>
    <p class="info-value">${comments}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Downloads</p>
    <p class="info-value">${downloads}</p>
  </div>
</div>
    </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  if (!loader) return;
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  if (!loader) return;
  loader.classList.add('is-hidden');
}

export { createGallery, clearGallery, showLoader, hideLoader };