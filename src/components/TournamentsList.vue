<template>
  <div>
    <table class="table center" v-if="tournaments.length !== 0">
      <thead>
        <tr>
          <th class="has-text-centered">Turnering:</th>
          <th class="has-text-centered">Dato:</th>
          <th class="has-text-centered">Sted:</th>
          <th class="has-text-centered">Organisør:</th>
          <th class="has-text-centered">Arbitør:</th>
          <th class="has-text-centered">Spillere:</th>
          <th class="has-text-centered">ID:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tournament in tournaments" :key="tournament.id">
          <td class="has-text-centered">
            <router-link
              :to="{
                path: '/tournament',
                query: {
                  name: tournament.name,
                  description: tournament.description,
                  place: tournament.place,
                  date: tournament.date,
                  organizer: tournament.organizer,
                  arbitor: tournament.arbitor,
                },
              }"
            >
              {{ tournament.name }}
            </router-link>
          </td>
          <th class="has-text-centered">{{ tournament.date }}</th>
          <td class="has-text-centered">{{ tournament.place }}</td>
          <td class="has-text-centered">{{ tournament.organizer }}</td>
          <td class="has-text-centered">{{ tournament.arbitor }}</td>
          <td class="has-text-centered">{{ tournament.playerCount}}</td>
          <td class="has-text-centered">{{ tournament._id }}</td>
        </tr>
      </tbody>
    </table>

    <h1 v-if="tournaments.length === 0">Ingen turneringer</h1>
    <h2 v-if="tournaments.length === 0">Det er ingen turneringer registret.</h2>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const API_URL = 'http://localhost:5000/api/v1/tournaments';
    const tournaments = ref([]);

    async function getTournaments() {
      const response = await fetch(API_URL);
      const json = await response.json();
      if (json.length !== 0) {
        tournaments.value = json;
        console.log(json);
      }
    }
    getTournaments();

    return {
      tournaments,
      getTournaments,
    };
  },
};
</script>
<style scoped>
table.center {
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 2rem;
  text-align: center;
}

h2 {
  text-align: center;
  padding-top: 10px;
}
</style>
