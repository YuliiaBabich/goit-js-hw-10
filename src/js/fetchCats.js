export const fetchCountries = name => {
  const BASE_URL ='https://api.thecatapi.com/v1/images/search?api_key=live_OpPmoOtiWW1fCPc5NywKSPInv8nblQsFJGbMFK0jB6J6drtIWqfkxxYsy8dtL1dy';
  const properties = 'fields=cat,name,temperament';

  return fetch(`${BASE_URL}${name}?${properties}`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};