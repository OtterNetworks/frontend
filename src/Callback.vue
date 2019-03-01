<template>
 <div>
   Signing you in...
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      timeoutFn: null
    }
  },
  mounted() {
    this.timeoutFn = setTimeout(async () => {
      const provider = this.$route.params.provider
      const queryString = window.location.search.substring(1).replace(/\/$/, '')
      const queryStringObj = this.parseQueryString(queryString)
      queryStringObj.redirectUri = `${window.location.origin}${window.location.pathname}`

      await axios.post(`/api/auth`, queryStringObj).then(response => {
        localStorage.setItem('token', queryStringObj['code'])
        window.close()
      })

      this.handleRedirect()
    }, 1000)
  },
  beforeDestroy() {
    clearTimeout(this.timeoutFn)
  },
  methods: {
    handleRedirect() {
      const redirect = this.$cookie.get('vue-authenticate-redirect')

      if (redirect) {
        window.location = redirect
        this.$cookie.delete('vue-authenticate-redirect')
      } else {
        window.location = window.location.origin
      }
    },
    parseQueryString(str = '') {
      const obj = {}
      let key
      let value
      str.split('&').forEach((keyValue) => {
        if (keyValue) {
          value = keyValue.split('=')
          key = decodeURIComponent(value[0])
          obj[key] = value[1] ? decodeURIComponent(value[1]) : true
        }
      })
      return obj
    }
  }
}
</script>
