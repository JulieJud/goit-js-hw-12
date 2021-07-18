import './css/styles.css';
import Notiflix from "notiflix";
const debounce = require('lodash.debounce');
import getRefs from './js/getRefs.js';
import { fetchCountries } from "./js/fetchCountries";
import renderOneCountry from "./teamplates/renderOneCountry.hbs";
import renderFewCountry from "./teamplates/renderFewCountries.hbs";


const refs = getRefs();

const DEBOUNCE_DELAY = 300;


fetchCountries()
    .then(renderCountries)
    .catch(err => console.log(err))



function renderCountries() { }


refs.searchCountry.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));