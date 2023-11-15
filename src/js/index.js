//import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import { fetchCats } from './js/fetchCats';

import SlimSelect from 'slim-select';
import { markupCreator, LoadHideEvents } from './helpers';
import { fetchBreeds } from './fetchCats';
import { fetchCatByBreed } from './fetchCats';

const loadHideEvents = new LoadHideEvents();
const catInfoEl = document.querySelector('.cat-info');
const selectEl = document.querySelector('.breed-select');
selectEl.addEventListener('change', onSelectChange);

loadHideEvents.showSelectLoader();
fetchBreeds()
  .then(data => {
    let selectMarkup = data
      .map(({ name, reference_image_id }) => {
        return `<option value=${reference_image_id}>${name}</option>`;
      })
      .join('');
    selectMarkup = '<option data-placeholder="true"></option>' + selectMarkup;
    selectEl.insertAdjacentHTML('beforeend', selectMarkup);
  
    new SlimSelect({
      select: '#breedSelect',
        settings: {
        searchPlaceholder: 'Search',
        placeholderText: 'Choose a breed',
      },
    });
  })
  .catch(error => {
    loadHideEvents.hideSelectLoader();
    loadHideEvents.showFetchMistake();
    console.dir(error);
  })
  .finally(() => {
    loadHideEvents.hideSelectLoader();
  });

function onSelectChange(e) {
  loadHideEvents.showOptionLoading();
  const breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(({ url, breeds }) => {
      catInfoEl.innerHTML = markupCreator(
        url,
        breeds[0].name,
        breeds[0].description,
        breeds[0].temperament
      );
    })
    .catch(error => {
      loadHideEvents.hideOptionLoading();
      loadHideEvents.showFetchMistake();
      console.log(error);
    })
    .finally(() => {
      loadHideEvents.hideOptionLoading();
    });
}