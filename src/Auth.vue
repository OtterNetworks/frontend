<template>
  <div>
    <button @click="auth('google')" class="button--google">Auth google</button>
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
        window.location = window.location.origin
      })
    }
  }
}
</script>
<style>
  .button--google { color: #ea4335; border: 1px solid #ea4335; }
</style>
