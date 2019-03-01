<template>
  <div>
    <button @click="auth('google')" class="button--google">Auth google</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    auth: function(provider) {
      if (this.$auth.isAuthenticated()) {
        this.$auth.logout()
      }
      this.$auth.authenticate(provider)
    }
  }
}
</script>
<style>
  .button--google { color: #ea4335; border: 1px solid #ea4335; }
</style>
