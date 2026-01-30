import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
  const query = form.elements['search-text'].value.trim();
if (!query) {
  iziToast.error({
    message: 'Please enter a search query.',
    position: 'topRight',
  });
  return;
}
    clearGallery();
    showLoader();
    
    getImagesByQuery(query)
      .then(data => {
        if (!data.hits.length) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return;
        }

        createGallery(data.hits);
      })
      .catch(() => {
        iziToast.error({
          message: 'Oops, something went wrong. Please try again later.',
          position: 'topRight',
        });
      })
      .finally(() => {
        hideLoader();
        form.reset();
      });
    
}
