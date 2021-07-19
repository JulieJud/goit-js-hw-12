import './css/styles.css';
import Notiflix from "notiflix";
const debounce = require('lodash.debounce');
import getRefs from './js/getRefs.js';
import { fetchCountries } from "./js/fetchCountries";
import countryCard from "./teamplates/renderOneCountry.hbs";
import CountriesCard from "./teamplates/renderFewCountries.hbs";


const refs = getRefs();

const DEBOUNCE_DELAY = 300;
refs.searchCountry.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch(e) {

    refs.countryInfo.innerHTML = ''
    refs.countryList.innerHTML = '';

    const searchLetter = e.target.value;

    console.log(searchLetter)

    if (searchLetter === '') {
        return Notiflix.Notify.failure('Please enter something');
    }
    else {

        fetchCountries(searchLetter)
            .then(CountriesCardMarkup)
            .catch(error => console.log(error))
    }
}

function CountriesCardMarkup(countries) {
    if (countries.length === 1) {
        const markupOneCountry = countryCard(countries[0])
        refs.countryInfo.insertAdjacentHTML('beforeend', markupOneCountry);
    }
    else if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
    }
    else if (countries.status === 404) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error('Please enter a valid country name!');

    }
    else if (countries.length >= 2 && countries.length <= 10) {
        const markupFewCountries = CountriesCard(countries)
        refs.countryList.insertAdjacentHTML('beforeend', markupFewCountries);

    }

}

