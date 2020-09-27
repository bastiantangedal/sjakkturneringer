<template>
  <div>
    <table class="table center" v-if="tournaments.length !== 0">
      <thead>
        <tr>
          <th>Navn:</th>
          <th>Dato:</th>
          <th>Sted:</th>
          <th>Organisør:</th>
          <th>Arbitør:</th>
          <th>Antall spillere:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tournament in tournaments" :key="tournament.id">
          <td>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C.">{{
              tournament.name
            }}</a>
          </td>
          <th>{{ tournament.date }}</th>
          <td>{{ tournament.place }}</td>
          <td>{{ tournament.organizer }}</td>
          <td>{{ tournament.arbitor }}</td>
          <td>{{ tournament.playerCount }}</td>
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

h1{
  font-size: 2rem;
  text-align: center;
}

h2 {
  text-align: center;
  padding-top: 10px;
}
</style>
