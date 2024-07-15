import 'swiper/css';
import '/scss/contact.scss';

import { useMap } from './components/contact/map.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { useValid } from './components/contact/validation.js';
import { usePartnersSlider } from './components/home/slider-partners.js';
import { accordeonFooter } from './components/accordeon-footer.js';

useMap();
useTheme();
usePartnersSlider();
useBurger();
usePhone();
useValid();
accordeonFooter();
