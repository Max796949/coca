import 'swiper/css'
import '/scss/main.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePartnersSlider } from './components/home/slider-partners.js'
import { useValid } from './components/contact/validation.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { accordeonFooter } from './components/accordeon-footer.js';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider ();
useValid();
useTestimonialsSlider ();
accordeonFooter ();
