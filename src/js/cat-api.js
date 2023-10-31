import axios from 'axios';
import { loadStateOn } from './loadState';

axios.defaults.headers.common['x-api-key'] =
  'live_9j5oGVMRFrtQD3lViLKuYlJ1vlO2yBVTV29ZR3RyLahgOAm1Br5sjy4y7M8jh1mE';

export function fetchBreeds() {
  loadStateOn()
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response);
}

export function fetchCatByBreed(breedId) {
  loadStateOn()
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response);
}
