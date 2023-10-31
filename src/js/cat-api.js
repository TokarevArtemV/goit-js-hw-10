import axios from 'axios';
import { refs } from './refs';
import { createMarkup } from './createMarkup';

axios.defaults.headers.common['x-api-key'] =
  'live_9j5oGVMRFrtQD3lViLKuYlJ1vlO2yBVTV29ZR3RyLahgOAm1Br5sjy4y7M8jh1mE';

export function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response;
    })
    .then(data => {
      const markup = createMarkup(data.data);
      refs.listEl.insertAdjacentHTML('afterbegin', markup);
      
    })
    .catch(error => {
      console.log(error);
    });
}
