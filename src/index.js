import { refs } from './js/refs';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectMarkup, catInfoMarkup } from './js/createMarkup';
import { loadOff, loadOn } from './js/loadState';
import { errorFn } from './js/errors';
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';
loadOn();

refs.listEl.addEventListener('change', evt => {
  refs.imgContainerEl.classList.add('hidden');
  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      refs.imgContainerEl.innerHTML = '';
      const catMarkup = catInfoMarkup(data.data);
      refs.imgContainerEl.insertAdjacentHTML('beforeend', catMarkup);
      document.querySelector('.fit-picture').onload = () => {
        loadOff();
      };
    })
    .catch(error => {
      errorFn(error.message);
      loadOn();
    });
});

fetchBreeds()
  .then(data => {
    const markup = selectMarkup(data.data);
    refs.listEl.insertAdjacentHTML(
      'beforeend',
      `<option data-placeholder="true"></option>${markup}`
    );
    new SlimSelect({
      select: '#breedselect',
      settings: {
        searchPlaceholder: 'Пошук',
        placeholderText: 'Вибери породу котика',
      },
    });
    loadOff();
  })
  .catch(error => {
    errorFn(error.message);
    loadOn();
  })
