import Modal from 'modal-vanilla';
import Slideout from 'slideout';
import {tns} from 'tiny-slider/src/tiny-slider';
import 'lightgallery.js';

// --modal--

const modalButtons = document.getElementsByClassName('open-modal');

[...modalButtons].forEach(function(item) {
  item.addEventListener('click', function(e) {
    const modalName = e.target.dataset.modal;

    if (e.target.dataset.order) {
      const transportInput = document.getElementsByClassName('order__transport');
      transportInput[0].setAttribute('value', e.target.dataset.order);

      const transportTitle = document.getElementsByClassName('modal-subtitle__transport');
      transportTitle[0].innerHTML = e.target.dataset.order;
    }

    new Modal({el: document.getElementById(modalName)}).show();
  });
});

// --slide menu--

const slideout = new Slideout({
  panel: document.getElementById('panel'),
  menu: document.getElementById('menu'),
  padding: 256,
  tolerance: 70
});

document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});

// --slider--

if (document.getElementById('about-us__slider') !== null) {
  const slider = tns({
    container: '#about-us__slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    nav: false,
    controlsText: ['', '']
  });
}

// --lightbox--

const lightgalleryElement = document.getElementsByClassName('lightgallery');

[...lightgalleryElement].forEach(function(item) {
    lightGallery(item);
});

// --show all types--
const showButtons = document.getElementsByClassName('show-button');

[...showButtons].forEach(function(item) {
  item.addEventListener('click', function(e) {
    const typeBlocks = document.getElementsByClassName(e.target.dataset.type);

    [...typeBlocks].forEach(function(item) {
      item.style.display = 'block';
    });
  });
});
