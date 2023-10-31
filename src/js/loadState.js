import { refs } from './refs';

export function loadStateOn() {
  refs.loadEl.style.display = 'block';
  refs.listEl.style.display = 'none';
  refs.imgContainerEl.style.display = 'none';
}

export function loadStateOff() {
  refs.loadEl.style.display = 'none';
  refs.listEl.style.display = 'block';
  refs.imgContainerEl.style.display = 'block';
}
