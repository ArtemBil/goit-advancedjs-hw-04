import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import {loadMoreImages, renderImages} from './js/render-functions.js';
import {fetchImages} from './js/pixabay-api.js';
import {errorMessage, errorNotFoundMessage, PUBLIC_API_KEY, reachedEndResultsErrorMessage} from './js/constants.js';

const form = document.querySelector('form');
const gallery = document.getElementById('gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');
const instance = new SimpleLightbox('#gallery a', {
  captions: true,
  captionType: 'attr',
  captionDelay: 250,
  showCounter: false,
  captionsData: 'alt'
});
let currentPage = 1;
let searchCriteria = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  currentPage = 1;

  const input = event.target.querySelector('input');
  const url = `https://pixabay.com/api/?key=${PUBLIC_API_KEY}&q=${encodeURI(input.value)}&image_type=photo&orientation=horizontal&safesearch=true?page=${currentPage}&per_page=15`;

  searchCriteria = input.value;

  gallery.innerHTML = '';
  loader.classList.add('loading');
  loadMoreButton.classList.add('hidden');

  try {
    const data = await fetchImages(url);

    if (!data.hits.length) {
      return iziToast.error({
        message: errorNotFoundMessage,
        position: 'topRight'
      });
    }

    renderImages(data.hits);
    instance.refresh();
    loadMoreButton.classList.remove('hidden');
  } catch (e) {
    console.log(e);

    return iziToast.error({
      message: errorMessage,
      position: 'topRight'
    });
  } finally {
    loader.classList.remove('loading');
    form.reset();
  }
});

loadMoreButton.addEventListener('click', async () => {
  currentPage += 1;
  loadMoreButton.classList.add('hidden');
  loader.classList.add('loading');

  const url = `https://pixabay.com/api/?key=${PUBLIC_API_KEY}&q=${encodeURIComponent(searchCriteria)}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=15`;

  try {
    const data = await fetchImages(url);
    const { height: imageHeight} = document.querySelector('.gallery-item').getBoundingClientRect();

    if (!data.hits.length) {
      currentPage = 1;
      iziToast.error({
        message: reachedEndResultsErrorMessage,
        position: 'topCenter'
      })
    }

    loadMoreImages(data.hits);
    instance.refresh();
    window.scrollBy({
      top: window.innerHeight - imageHeight / 2,
      behavior: 'smooth',
    });
    loadMoreButton.classList.remove('hidden');
  } catch (e) {
    console.log(e);
    currentPage = 1;

    return iziToast.error({
      message: errorMessage,
      position: 'topRight'
    });
  } finally {
    loader.classList.remove('loading');
  }
});