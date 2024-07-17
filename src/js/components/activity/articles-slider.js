import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';

export const articlesSwiper = () => {
  const swiper = new Swiper('.articles__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.8,
    spaceBetween: 32,
    breakpoints: {
        321: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        551: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        851: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
      },

    // Navigation arrows
    navigation: {
      nextEl: '.articles__btn--prev',
      prevEl: '.articles__btn--next',
    },
  });
  //   Скобка экспорта
};
