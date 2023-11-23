export function createMarkupBreeds(arr) {
    return arr
        .map(({ id, name }) => `<option value="${id}">${name}</option>`)
        .join('');
}

export function createMarkupBreedInfo({name, description, temperament}, image) {
    return `
        <img class="cat-img" src="${image}" alt="${name}" loading="lazy">
        <div class="cat-main">
            <h1 class="cat-name">${name}</h1>
            <p class="cat-descr">${description}</p>
            <p class="cat-temp"><b>Temperament: </b>${temperament}</p>
        </div>
    `
}