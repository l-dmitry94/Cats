import axios from 'axios';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

axios.defaults.headers.common['x-api-key'] =
    'live_jzg6eOfN9rJJhZgnNLwLsESqx3V165pAHSfKbZmjtZmaiuJirb9umuB6M5h4myvp';

const BASE_URL = 'https://api.thecatapi.com/v1';

export async function fetchBreeds() {
    const ENDPOINT = 'breeds';

    try {
        Notiflix.Loading.standard('Loading data, please wait...');

        const response = await axios({
            method: 'GET',
            url: `${BASE_URL}/${ENDPOINT}`,
        });

        Notiflix.Loading.remove();

        return response.data;
    } catch {
        Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
        );

        Notiflix.Loading.remove();
    }
}

export async function fetchCatByBreed(breedId) {
    const ENDPOINT = `images/search?breed_ids=${breedId}`;

    try {
        Notiflix.Loading.standard('Loading data, please wait...');

        const response = await axios({
            method: 'GET',
            url: `${BASE_URL}/${ENDPOINT}`,
        });

        Notiflix.Loading.remove();

        return response.data[0];
    } catch {
        Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
        );
        Notiflix.Loading.remove();
    }
}
