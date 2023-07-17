import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueIframe from 'vue-iframes'


createApp(App)
    .use(store)
    .use(router)
    .use(VueIframe)
    .mount('#app')
