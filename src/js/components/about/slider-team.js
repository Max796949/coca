import Swiper from 'swiper/bundle';
import 'swiper/css';


export const sliderTeam = () => {
  const swiper = new Swiper('.team__swiper', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    breakpoints: {

      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      470: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      769: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      // when window width is >= 640px
      993: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
};
