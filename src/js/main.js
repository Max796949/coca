import 'swiper/css'
import '../assets/scss/main.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePartnersSlider } from './components/home/slider-partners.js'
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider ();
useTestimonialsSlider ();
