import Vue from "vue";

/**
 * Search for icons to use
 *
 * 1. https://fontawesome.com/icons?d=gallery
 * 2. import the icon you want to use. ie. "faBars"
 * 3. add it to the library.
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBell,
  faCaretDown,
  faCaretRight,
  faCompress,
  faGripHorizontal,
  faHome,
  faList,
  faMap,
  faPowerOff,
  faPlusCircle,
  faSearch,
  faTable
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add
library.add(
  faBars,
  faBell,
  faCaretDown,
  faCaretRight,
  faCompress,
  faGripHorizontal,
  faHome,
  faList,
  faMap,
  faPowerOff,
  faPlusCircle,
  faSearch,
  faTable
);

Vue.component("fa-icon", FontAwesomeIcon);
