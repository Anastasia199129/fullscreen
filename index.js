const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const productsImg = document.querySelectorAll('.product-img');
const loader = document.querySelector('.loader-none');
const wrapper = document.querySelector('.wrapper');
const notAvailable = document.querySelector('.wrapper-notAvailable-none');

console.log(wrapper);

let index = 0;

const activSlide = n => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
};

const onBtnNextClick = () => {
  loader.classList.add('loader');
  loader.classList.remove('loader-none');
  productsImg.forEach(img => img.classList.remove('product-img'));
  productsImg.forEach(img => img.classList.add('nextProductKeyframes'));
  if (index === slides.length - 1) {
    setTimeout(() => {
      index = 0;
      activSlide(index);
      loader.classList.add('loader-none');
      loader.classList.remove('loader');
      productsImg.forEach(img => img.classList.remove('nextProductKeyframes'));
      productsImg.forEach(img => img.classList.add('product-img'));
    }, 100);
  } else {
    setTimeout(() => {
      productsImg.forEach(img => img.classList.remove('nextProductKeyframes'));
      productsImg.forEach(img => img.classList.add('product-img'));
      index += 1;
      activSlide(index);
      loader.classList.add('loader-none');
      loader.classList.remove('loader');
    }, 250);
  }
};

const onBtnPrevClick = () => {
  loader.classList.add('loader');
  loader.classList.remove('loader-none');
  productsImg.forEach(img => img.classList.remove('product-img'));
  productsImg.forEach(img => img.classList.add('nextProductKeyframes'));

  if (index === 0) {
    setTimeout(() => {
      index = slides.length - 1;
      activSlide(index);
      loader.classList.add('loader-none');
      loader.classList.remove('loader');
      productsImg.forEach(img => img.classList.remove('nextProductKeyframes'));
      productsImg.forEach(img => img.classList.add('product-img'));
    }, 100);
  } else {
    setTimeout(() => {
      productsImg.forEach(img => img.classList.remove('nextProductKeyframes'));
      productsImg.forEach(img => img.classList.add('product-img'));
      index -= 1;
      activSlide(index);
      loader.classList.add('loader-none');
      loader.classList.remove('loader');
    }, 250);
  }
};

function onOrientationchange(e) {
  e.preventDefault();
  if (window.screen.height < window.screen.width) {
    wrapper.classList.remove('wrapper');
    wrapper.classList.add('wrapper-notAvailable-none');
    notAvailable.classList.remove('wrapper-notAvailable-none');
  }

  if (window.screen.height > window.screen.width) {
    wrapper.classList.remove('wrapper-notAvailable-none');
    wrapper.classList.add('wrapper');
    notAvailable.classList.add('wrapper-notAvailable-none');
  }
}

if (window.screen.height < window.screen.width) {
  window.addEventListener('orientationchange', onOrientationchange);
}

if (window.screen.height > window.screen.width) {
  window.removeEventListener('orientationchange', onOrientationchange);
}

next.addEventListener('click', onBtnNextClick);
prev.addEventListener('click', onBtnPrevClick);
