export function selectMarkup(arrBreeds) {
  return arrBreeds
    .map(({ name, id }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
}

export function catInfoMarkup(data) {
  return `<img
        class="fit-picture"
        src="${data.data[0].url}"
        alt="${data.data[0].breeds[0].name}"
      />
      <h2 class="title-descrip">${data.data[0].breeds[0].name}</h2>
      <p class="text-descrip">${data.data[0].breeds[0].description}</p>`;
}
