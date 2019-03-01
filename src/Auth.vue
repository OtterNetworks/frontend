<template>
  <div>
    <button @click="auth('google')" class="button--google">Auth google</button>
    Response?: {{response}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      response: ''
    }
  },
  methods: {
    auth: function(provider) {
      if (this.$auth.isAuthenticated()) {
        this.$auth.logout()
      }

      this.response = null

      var this_ = this;
      this.$auth.authenticate(provider).then(function (authResponse) {
        if (provider === 'google') {
          this_.$http.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect').then(function (response) {
            this_.response = response
          })
        }
      }).catch(function (err) {
        this_.response = err
      })
    }
  }
}
</script>
<style>
  .button--google { color: #ea4335; border: 1px solid #ea4335; }
</style>
