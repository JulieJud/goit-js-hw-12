
const URL = 'https://restcountries.eu/rest/v2';
const OPTIONS = 'fields=name;capital;population;flag;languages'

function fetchCountries(name) {
    return fetch(`${URL}/name/${name}?${OPTIONS}`)
        .then(response => { return response.json() })

};
export { fetchCountries }