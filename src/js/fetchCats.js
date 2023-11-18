/*function getObjekt(symbol) {
const BASE_URL = 'https://api.thecatapi.com/v1';
  const End_Point = '/images/search'; 
  const PARAMS = `?symbol=${symbol}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;
  //const api_key = '?api_key=live_OpPmoOtiWW1fCPc5NywKSPInv8nblQsFJGbMFK0jB6J6drtIWqfkxxYsy8dtL1dy';
  //const urlKey = `${BASE_URL}${END_POINT}${PARAMS}${api_key}`;
  const options = {
    headers: {
      'x-api-key': 'live_OpPmoOtiWW1fCPc5NywKSPInv8nblQsFJGbMFK0jB6J6drtIWqfkxxYsy8dtL1dy',
        },
   // const URL = 'https://api.thecatapi.com/v1/images/search?api_key=live_OpPmoOtiWW1fCPc5NywKSPInv8nblQsFJGbMFK0jB6J6drtIWqfkxxYsy8dtL1dy';
  }

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  getPrice(query).then(result => {
    renderTicker(result);
  });
});
  return fetch(url, options).then(res => res.json());
}

function renderCats({ objekt, symbol }) {
  const markup = `
  <span>${symbol}</span>
  <span>${(+price).toFixed(2)}</span>
  `;
  refs.infoEl.innerHTML = markup;
}
*/

const URL = `https://api.thecatapi.com/v1`;
export function fetchBreeds() {
  return fetch(`${URL}/breeds`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${URL}/images/${breedId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}  