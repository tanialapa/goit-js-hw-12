import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '54283114-39be9c7278f058101fc4d5798';

function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}

export { getImagesByQuery };