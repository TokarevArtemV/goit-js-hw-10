export function createMarkup(arrBreeds) {
  return arrBreeds
    .map(({ name, id }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
}
