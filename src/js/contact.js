import '../assets/scss//base/vars.scss';
import '../assets/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useMap } from './components/contact/map.js';
import { accordeonFooter } from './components/accordeon-footer.js';

useTheme();
useBurger();
useMap ();
accordeonFooter();


