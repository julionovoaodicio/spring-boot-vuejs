import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "@/assets/css/themify-icons.css";

import store from './store'

import GlobalComponents from "./plugins/globalComponents";
import GlobalDirectives from "./plugins/globalDirectives";

Vue.config.productionTip = false;

Vue.use(GlobalDirectives);
Vue.use(GlobalComponents);
Vue.use(BootstrapVue);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

