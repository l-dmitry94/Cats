import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkupBreedInfo, createMarkupBreeds } from './js/markup';

const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
};

getAllBreeds();

async function getAllBreeds() {
    try {
        const data = await fetchBreeds();
        if (!data) return;

        refs.select.innerHTML = createMarkupBreeds(data);
        new SlimSelect({
            select: refs.select,
        });
    } catch {
        Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
        );
    }
}

refs.select.addEventListener('change', getOneBreed);

async function getOneBreed() {
    const selectedBreed = refs.select.value;

    try {
        const data = await fetchCatByBreed(selectedBreed);

        if (!data) return;

        refs.catInfo.innerHTML = createMarkupBreedInfo(
            data.breeds[0],
            data.url
        );
    } catch {
        Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
        );
    }
}
