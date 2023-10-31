import { refs } from './js/refs';
import { fetchBreeds } from './js/cat-api';

refs.listEl.addEventListener('input', evt => {
  console.log(evt.currentTarget.value);
});

fetchBreeds();
