<template>
  <div>
    <h1 class="title is-spaced">{{name}}</h1>
    <h2 class="subtitle">{{description}}</h2>
    <h4 class="subtitle is-6">Sted: {{place}}</h4>
    <h4 class="subtitle is-6">Organisør: {{organizer}}</h4>
    <h4 class="subtitle is-6">Dato: {{date}}</h4>
    <h4 class="subtitle is-6">Arbitør: {{arbitor}}</h4>
  </div>
</template>

<script>

export default {
  props: {
    name: String,
    description: String,
    place: String,
    date: String,
    organizer: String,
    arbitor: String,
  },

  setup() {

  },
};
</script>

<style scoped>
</style>
