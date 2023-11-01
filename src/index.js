import { refs, options } from './js/refs';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectMarkup, catInfoMarkup } from './js/createMarkup';
import { Notify } from 'notiflix';
import { loadOff, loadOn } from './js/loadState';
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';

refs.listEl.addEventListener('change', evt => {
  refs.imgContainerEl.classList.add("hidden");
  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      refs.imgContainerEl.innerHTML = '';
      const catMarkup = catInfoMarkup(data);
      refs.imgContainerEl.insertAdjacentHTML('afterbegin', catMarkup);
      loadOff();
    })
    .catch(error => {
      Notify.failure(error.message, options.notiflix);
      loadOn();
    });
});

fetchBreeds()
  .then(data => {
    loadOff();
    const markup = selectMarkup(data.data);

    // fetchCatByBreed(data.data[0].id)
    //   .then(data => {
    //     refs.imgContainerEl.innerHTML = '';
    //     const catMarkup = catInfoMarkup(data);
    //     refs.imgContainerEl.insertAdjacentHTML('afterbegin', catMarkup);
    //     loadOff();
    //   })
    //   .catch(error => {
    //     Notify.failure(error.message, refs.optionNotiflix);
    //     loadOn();
    //   });
    
    refs.listEl.insertAdjacentHTML('beforeend', markup);
    new SlimSelect({
      select: '#breedselect',
      settings: { searchPlaceholder: 'Пошук' },
    });
  })
  .catch(error => {
    Notify.failure(error.message, options.notiflix);
    loadOn();
  });
