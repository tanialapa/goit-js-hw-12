import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '54283114-39be9c7278f058101fc4d5798';
const per_page = 15;

async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,

    per_page,
      page
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

export { getImagesByQuery };