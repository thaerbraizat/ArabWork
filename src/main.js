import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin,  } from "bootstrap-vue";
import store from './store'

import CommonLoading from './components/common/loading.vue'
import Navbar from './components/common/navbar.vue'
import * as VueGoogleMaps from 'vue2-google-maps';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDpayHIo2RIYIEId-kebZcHVfpbBSF9BkE',
    libraries: 'places', // necessary for places input
  },
});

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component("common-loading", CommonLoading)
Vue.component("navbar-nav",Navbar)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


