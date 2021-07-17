import './css/styles.css';
import Notiflix from "notiflix";


const DEBOUNCE_DELAY = 300;

import { fetchCountries } from "./js/fetchCountries"


fetchCountries(name)
    .then(renderCountries)
    .catch(err => console.log(err))



function renderCountries() { }