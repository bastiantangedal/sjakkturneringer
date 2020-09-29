/* eslint no-trailing-spaces: 1 */
// trailing space _
<template>
  <div class="pt-4">
    <h1 class="title is-spaced">{{ tournament.name }}</h1>
    <h2 class="subtitle">{{ tournament.description }}</h2>
    <h4 class="subtitle is-6">
      <strong>Dato: {{ tournament.date }}</strong>
    </h4>
    <h4 class="subtitle is-6">
      <strong>Sted: {{ tournament.place }}</strong>
    </h4>
    <h4 class="subtitle is-6">Organisør: {{ tournament.organizer }}</h4>
    <h4 class="subtitle is-6">Arbitør: {{ tournament.arbiter }}</h4>
    <h4 class="subtitle is-6">Betenkningstid: {{ tournament.time }}</h4>
    <h4 class="subtitle is-6">Startkontigent: {{ tournament.price }}</h4>
    <h4 class="subtitle is-6">Gruppeinndeling: {{ tournament.group }}</h4>
    <div>
      <div class="field is-grouped pt-2">
        <p class="control">
          <button class="button is-dark is-rounded">Meld deg på</button>
        </p>
        <p v-if="hasPlayers" class="control">
          <button
            class="button is-dark is-rounded"
            @click="
              $router.push({ name: 'players', query: { id: tournament._id } })
            "
          >
            Se spillere
          </button>
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
  },

  setup(props) {
    const API_URL = `http://localhost:5000/api/v1/tournaments/${props.id}`;
    const tournament = ref([]);
    let hasPlayers = ref(false);

    function isArrayEmpty(array) {
      return array.filter((el) => !Object.keys(el).length !== 0);
    }

    function hasPlayerArrayAndProperties() {
      const x = JSON.parse(JSON.stringify(tournament.value));

      // Check if tournament has "player" JSON array
      if (Object.prototype.hasOwnProperty.call(x, 'players')) {
        console.log(`Player count: ${x.players.length}`);
        if (isArrayEmpty(x.players) !== 0) {
          hasPlayers = true;
        }
      }

      console.log(hasPlayers);
    }

    async function getTournament() {
      const response = await fetch(API_URL);
      const json = await response.json();
      if (json.length !== 0) {
        tournament.value = json;

        console.log(tournament.value);
        console.log(JSON.parse(JSON.stringify(tournament.value)));
      }
    }

    getTournament();
    hasPlayerArrayAndProperties();

    return {
      tournament,
      hasPlayerArrayAndProperties,
      isArrayEmpty,
      getTournament,
      hasPlayers,
    };
  },
};
</script>

<style scoped>
</style>
