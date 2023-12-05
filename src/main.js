import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin,ToastPlugin   } from "bootstrap-vue";

import store from './store'
import Navbar from './components/common/navbar.vue'

import * as VueGoogleMaps from 'vue2-google-maps';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDpayHIo2RIYIEId-kebZcHVfpbBSF9BkE',
    libraries: 'places', 
  },
});

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToastPlugin )

Vue.component("navbar-nav",Navbar)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


