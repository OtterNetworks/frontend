<template>
  <div>
    <div>
      ID: {{id}}
    </div>
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name" id="name" />
    </div>

    <div>
      <label for="status">Status:</label>
      <select v-model="status" id="status">
        <option disabled value=" ">Status...</option>
        <option value="new">New</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
      </select>
    </div>

    <div>
      <input type="radio" v-model="type" value="feature" id="feature"/>
      <label for="feature">Feature </label>
      <input type="radio" v-model="type" value="bug" id="bug" />
      <label for="bug">Bug </label>
    </div>

    <div>
      <button @click="Save">Save!</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: null,
      name: '',
      status: '',
      type: 'feature',
      isBug: false,
      isFeature: true
    }
  },
  methods: {
    Save() {
      if (this.isBug) this.type = 'bug'
      if (this.isFeature) this.type = 'feature'
      const data = {
        name: this.name,
        status: this.status,
        type: this.type
      }

      const self = this

      axios.post('/api/items', data)
        .catch(error => {
            if (error.status == 409) {
              self.id = error.response.id
            }
            console.log(JSON.stringify(error))
          }
        )
        .then(response => {
          self.id = response.id
        })
    }
  }
}
</script>
<style>

</style>

