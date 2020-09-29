<template>
  <div>
    <table class="table center">
      <thead>
        <tr>
          <th class="has-text-centered">Navn:</th>
          <th class="has-text-centered">Klubb:</th>
          <th class="has-text-centered">FIDE:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in tournament.players" :key="player.name">
          <td class="has-text-centered">
            <th class="has-text-centered has-text-weight-normal">{{ player }}</th>
          </td>
          <th class="has-text-centered">{{ player.playerClub }}</th>
          <td class="has-text-centered">{{ player.playerRating }}</td>
        </tr>
      </tbody>
    </table>
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

<style>
</style>
