import { refs } from './js/refs';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectMarkup, catInfoMarkup } from './js/createMarkup';
import { Notify } from 'notiflix';
import { loadStateOff, loadStateOn } from './js/loadState';
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#breedselect',
});

refs.listEl.addEventListener('input', evt => {
  refs.imgContainerEl.style.display = 'none';
  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      refs.imgContainerEl.innerHTML = '';
      const catMarkup = catInfoMarkup(data);
      refs.imgContainerEl.insertAdjacentHTML('afterbegin', catMarkup);
      loadStateOff()
    })
    .catch(error => {
      Notify.failure(error.message, refs.optionNotiflix);
      loadStateOn();
    });
});

fetchBreeds()
  .then(data => {
    loadStateOff();
    const markup = selectMarkup(data.data);
    refs.listEl.insertAdjacentHTML('afterbegin', markup);
    fetchCatByBreed(data.data[0].id)
      .then(data => {
        refs.imgContainerEl.innerHTML = '';
        const catMarkup = catInfoMarkup(data);
        refs.imgContainerEl.insertAdjacentHTML('afterbegin', catMarkup);
        loadStateOff();
      })
      .catch(error => {
        Notify.failure(error.message, refs.optionNotiflix);
        loadStateOn();
      });
  })
  .catch(error => {
    Notify.failure(error.message, refs.optionNotiflix);
    loadStateOn();
  });
