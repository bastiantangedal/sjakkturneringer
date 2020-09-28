/* eslint no-trailing-spaces: 1 */
// trailing space _
<template>
  <div>
    <h1 class="title is-spaced">{{ tournament.name }}</h1>
    <h2 class="subtitle">{{ tournament.description }}</h2>
    <h4 class="subtitle is-6">Sted: {{ tournament.place }}</h4>
    <h4 class="subtitle is-6">Organisør: {{ tournament.organizer }}</h4>
    <h4 class="subtitle is-6">Dato: {{ tournament.date }}</h4>
    <h4 class="subtitle is-6">Arbitør: {{ tournament.arbitor }}</h4>
    <div>
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-dark is-rounded">Meld deg på</button>
        </p>
        <p class="control">
          <button class="button is-dark is-rounded">Se spillere</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  props: {
    id: String,
    name: String,
    description: String,
    place: String,
    date: String,
    organizer: String,
    arbitor: String,
  },

  setup(props) {
    const API_URL = `http://localhost:5000/api/v1/tournaments/${props.id}`;
    const tournament = ref([]);

    async function getTournament() {
      const response = await fetch(API_URL);
      const json = await response.json();
      if (json.length !== 0) {
        tournament.value = json;
        console.log(json);
      }
    }
    getTournament();

    return {
      tournament,
      getTournament,
    };
  },
};
</script>

<style scoped>
</style>
