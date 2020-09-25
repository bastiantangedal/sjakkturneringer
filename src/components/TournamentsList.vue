<template>
  <div>
    <table class="table center">
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
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C.">{{ tournament.name }}</a>
          </td>
          <th>{{ tournament.date }}</th>
          <td>{{ tournament.place }}</td>
          <td>{{ tournament.organizer }}</td>
          <td>{{ tournament.arbitor }}</td>
          <td>{{ tournament.playerCount }}</td>
        </tr>
      </tbody>
    </table>
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

      tournaments.value = json;
    }

    getTournaments();

    return {
      tournaments,
      getTournaments,
    };
  },
};
</script>
<style>
table.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
