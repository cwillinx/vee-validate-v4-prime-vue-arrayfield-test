import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/primevue.css';
// import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    base: Aura,
    preset: Aura,
    // preset: MyPreset,
    // options: {
    //   prefix: 'p',
    //   darkModeSelector: 'light',
    //   cssLayer: {
    //     name: 'primeui',
    //     // undocumented feature,
    //     // see https://github.com/primefaces/primevue/issues/5540#issuecomment-2040022902
    //     order: 'styleguide, styleguideReset, primeui, primevue, app;',
    //   },
    // },
  },
});

app.mount('#app');
