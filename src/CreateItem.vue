<template>
  <div>
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
      <input type="radio" v-model="type" id="bug" />
      <label for="bug">Bug </label>
      <input type="radio" v-model="type" id="feature"/>
      <label for="feature">Feature </label>
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
      name: '',
      status: '',
      type: ''
    }
  },
  methods: {
    Save() {
      const data = {
        name: this.name,
        status: this.status,
        type: this.type
      }

      console.log(data)

      axios.post('/api/items', data, Headers={'Content-Type': 'application/json'})
        .then(response => console.log(JSON.stringify(response.data)))
    }
  }
}
</script>
<style>

</style>

