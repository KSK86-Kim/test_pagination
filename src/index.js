import './main.scss';
import refs from './js/refs'; /* ждём, пока у нас появятся все нужные имена классов для querySelector */
import ApiService from './js/api';
import MoviePagination from './js/paginetion';

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

//Проверка работы запроса популярных фильмов и отрисовка галлереи карточек
const Api = new MoviePagination('.movie__list');
Api.fetchPopularMoviesList().then(console.log('привет '));

function onSearch(event) {
  event.preventDefault();
}

// console.log(Api.goToRerevPage, Api.goToNextPage);
prev.addEventListener('click', Api.goToRerevPage);

next.addEventListener('click', Api.goToNextPage);

function pagination(c, m) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

for (let i = 1, l = 200; i <= l; i++)
  console.log(`Selected page ${i}:`, pagination(i, l));
