import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
        .get('/api/test')
        .then(response => (this.info = response.data))
  }
})
