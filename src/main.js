import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'

import axios from 'axios'

import router from './routers/main_router'
import App from './App.vue'

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: window.location.origin,
  providers: {
    google: {
      clientId: '275173569279-g8if65mjf5i8ih34ofjauf97fhnahg52.apps.googleusercontent.com',
      redirectUri: 'http://google-auth-platform.otterly.cc/',
      url: '/api/auth'
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
