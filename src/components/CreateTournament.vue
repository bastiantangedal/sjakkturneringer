<template>
  <form @submit.prevent="createTournament">
    <div class="field" aria-autocomplete="false">
      <label class="label">Turneringsnavn:</label>
      <div class="control">
        <input
          v-model="tournamentName"
          class="input"
          size="15"
          type="text"
          required
        />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Informasjon:</label>
      <div class="control">
        <textarea
          class="textarea"
          type="text"
          v-model="description"
          rows="4"
          required
        />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Organisør (sjakklubb):</label>
      <div class="control">
        <input v-model="organizer" class="input" type="text" required />
      </div>
    </div>

    <div class="field" aria-autoc omplete="false">
      <label class="label">Betenkningstid</label>
      <div class="control">
        <input v-model="time" class="input" type="text" required />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Sted:</label>
      <div class="control">
        <input v-model="place" class="input" type="text" required />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Gruppeinndeling:</label>
      <div class="control">
        <input v-model="group" class="input" type="text" required />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Dato:</label>
      <div class="control">
        <input v-model="date" class="input" type="text" required />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Arbitør (fullt navn):</label>
      <div class="control">
        <input v-model="arbiter" class="input" type="text" required />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Startavgift eller prisinformasjon:</label>
      <div class="control">
        <input v-model="price" class="input" type="text" />
      </div>
    </div>

    <button type="submit" class="button is-success">Opprett turnering</button>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';
import { nanoid } from 'nanoid';

export default {
  setup() {
    const API_URL = `http://localhost:5000/api/v1/tournaments/${nanoid(1)}`;

    const tournamentName = ref('');
    const description = ref('');
    const price = ref('');
    const date = ref('');
    const place = ref('');
    const group = ref('');
    const organizer = ref('');
    const time = ref('');
    const arbiter = ref('');

    async function createTournament() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: tournamentName.value,
          description: description.value,
          place: place.value,
          group: group.value,
          date: date.value,
          organizer: organizer.value,
          time: time.value,
          arbiter: arbiter.value,
          price: price.value,
        }),
      });

      const json = await response.json();
      console.log(json);
      this.$router.push('/');
    }

    return {
      tournamentName,
      description,
      place,
      group,
      date,
      organizer,
      time,
      arbiter,
      price,
      createTournament,
    };
  },
};
</script>

<style>
</style>
