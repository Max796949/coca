import 'swiper/css';
import '/scss/about.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { sliderBelieve } from './components/about/slider-believe.js';
import { sliderTeam } from './components/about/slider-team.js';
import { accordeonFooter } from './components/accordeon-footer.js';

useTheme();
useBurger();
sliderBelieve();
sliderTeam();
accordeonFooter ();