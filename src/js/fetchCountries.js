
const baseUrl = 'https://restcountries.eu/rest/v2';
const OPTIONS = 'fields=name;capital;population;flag;languages'

function fetchCountries(name) {
    return fetch(baseUrl + `/name/${name}?${OPTIONS}`)
        .then(response => { return respopnse.json() })

};
export { fetchCountries }