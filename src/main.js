import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const submit = document.querySelector('[type="submit"]');
const loadMoreBtn = document.querySelector('.load-more');
const ERROR_POSITION = 'topRight';

let page = 1;
let query = '';
let totalHits = 0;
let loadedHits = 0;
submit.addEventListener('click', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onFormSubmit(event) {
  event.preventDefault();
  hideLoadMoreButton();
  
  const value = form.elements['search-text'].value.trim();
  if (!value) {
    showError('Please enter a search query.')
    return
  }
  query = value;
  page = 1;
  totalHits = 0;
  loadedHits = 0;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    totalHits = data.totalHits;
    loadedHits += data.hits.length;

    renderResults(data.hits);
    if (loadedHits < totalHits) {
      showLoadMoreButton();
    } else if (loadedHits > 0) {
      showEndMessage();
    }

  } catch {
    showError('Oops, something went wrong. Please try again later.');
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    loadedHits += data.hits.length;
    createGallery(data.hits);

    smoothScroll();

    if (loadedHits < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: ERROR_POSITION,
      });
      hideLoadMoreButton();
    }
  } catch {
    showError('Oops, something went wrong. Please try again later.');
  } finally {
    hideLoader();
  }
}

//функція помилки
function showError(message) {
  iziToast.error({ message, position: ERROR_POSITION });
}
function showEndMessage() {
  hideLoadMoreButton();

  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: ERROR_POSITION,
  });
}
// функція яка вставляє картинки
function renderResults(hits) {
  if (!hits.length) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  createGallery(hits);
}

function smoothScroll() {
  const card = document.querySelector('.gallery-item');
  if (!card) return;

  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
