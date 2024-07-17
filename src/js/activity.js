import 'swiper/css';
import '/scss/activity.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { activitySlider } from './components/activity/activity-slider.js';
import { sortNav } from './components/activity/sortnav.js';
import { articlesSwiper } from './components/activity/articles-slider.js';
import { accordeonFooter } from './components/accordeon-footer.js';

useTheme();
useBurger();
activitySlider();
sortNav();
articlesSwiper();
accordeonFooter();
