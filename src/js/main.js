import '../scss/style.scss';

// Preloader mask
const preload = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preload.remove();
});

// URL Hash remove
window.addEventListener('hashchange', () => {
  const pureLocation = location.href.replace(/#.*/, '');
  history.replaceState(null, null, pureLocation);
});

// Yandex Map "lazyload" with Intersection Observer
let yaMapShown = false;
const mapContainer = document.querySelector('.yandex-map');

function showYaMap(node) {
  node.innerHTML = `<iframe
  title="Яндекс Карты - Адрес"
  src="https://yandex.ru/map-widget/v1/?ll=107.611451%2C51.812465&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzc0NTEzMBJm0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQkdGD0YDRj9GC0LjRjywg0KPQu9Cw0L0t0KPQtNGNLCDQodC-0LvQvdC10YfQvdCw0Y8g0YPQu9C40YbQsCwgN9CQIgoNEDnXQhX2P09C&z=17.05"
  width="520"
  height="420">
  </iframe>`;
}

const observer = new IntersectionObserver(
  (entries) => {
    if (!yaMapShown && entries[0].isIntersecting) {
      showYaMap(mapContainer);
      yaMapShown = true;
    }
  },
  { root: null, rootMargin: '200px' }
);

observer.observe(mapContainer);

// Button "To top"
const upBtn = document.querySelector('.btn-up');

document.addEventListener('scroll', () => {
  upBtn.classList.toggle('btn-up_visible', window.scrollY >= 900);
});

upBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Burger and Mobile menu control
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const html = document.querySelector('html');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  html.classList.toggle('hidden-scrollbar');
  burgerMenu.classList.toggle('burger-menu_visible');
});

burgerMenu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    burgerBtn.classList.toggle('open');
    html.classList.toggle('hidden-scrollbar');
    burgerMenu.classList.toggle('burger-menu_visible');
  }
});
