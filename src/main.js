import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";

library.add(faCircleXmark, faCircleCheck)

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

