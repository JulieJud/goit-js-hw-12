import './css/styles.css';
import Notiflix from "notiflix";
const debounce = require('lodash.debounce');
import getRefs from './js/getRefs.js';
const refs = getRefs();



const DEBOUNCE_DELAY = 300;

import { fetchCountries } from "./js/fetchCountries"


fetchCountries()
    .then(renderCountries)
    .catch(err => console.log(err))



function renderCountries() { }


refs.searchCountry.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));