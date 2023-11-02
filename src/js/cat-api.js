import axios from 'axios';
import { loadOn } from './loadState';
import { errorFn } from './errors';

axios.defaults.headers.common['x-api-key'] =
  'live_9j5oGVMRFrtQD3lViLKuYlJ1vlO2yBVTV29ZR3RyLahgOAm1Br5sjy4y7M8jh1mE';

export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';
  const PARAMS = new URLSearchParams('');
  const url = BASE_URL + END_POINT + PARAMS;

  return axios
    .get(url)
    .then(response => {
      if (response.status===200) return response;
      return Promise.reject(response.status);
    })
    .catch(error => {
      errorFn(error);
    })
    .finally(loadOn());
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/images/search';
  const PARAMS = new URLSearchParams({ breed_ids: breedId });
  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
  return axios
    .get(url)
    .then(response => {
      if (response.status === 200) return response;
      return Promise.reject(response.status);
    })
    .catch(error => {
      errorFn(error);
    })
    .finally(loadOn());
}
