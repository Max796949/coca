import Swiper from 'swiper/bundle';
import 'swiper/css';

export const activitySlider = () => {
  const swiper = new Swiper('.activity__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 32,
  });


  const navButtons = document.querySelectorAll('.hero__nav-item-sort');


  const filterSlides = (filter) => {
    const slides = document.querySelectorAll('.swiper-slide');

    if (filter === 'all') {
      slides.forEach((slide) => (slide.style.display = 'block'));
      return;
    }

    slides.forEach((slide) => {
      if (slide.classList.contains(filter)) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterSlides(filter);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  activitySlider();
});
