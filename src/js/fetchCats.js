/*export const fetchCats = name => {
  const BASE_URL ='https://api.thecatapi.com/v1/images/search?api_key=live_OpPmoOtiWW1fCPc5NywKSPInv8nblQsFJGbMFK0jB6J6drtIWqfkxxYsy8dtL1dy';
  const properties = 'fields=cat,name,temperament';*/
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