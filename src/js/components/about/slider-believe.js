import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const sliderBelieve = () => {
  const swiper = new Swiper('.believe__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        769: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        993: {
          slidesPerView: 2.5,
          spaceBetween: 40
        }
      }
  });
};
