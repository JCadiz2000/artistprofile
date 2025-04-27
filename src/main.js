import { createApp } from 'vue';
import App from './App.vue';
import Primevue from 'primevue/config';
import 'primeflex/primeflex.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

//Primevue components
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import Image from 'primevue/image';
import Button from 'primevue/button';

library.add(faUserSecret, faTwitter);

const app = createApp(App);
app.use(Primevue, { ripple: true });
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Avatar', Avatar);
app.component('Image', Image);
app.component('Button', Button);
app.mount('#app');