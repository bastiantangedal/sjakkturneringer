<template>
  <form @submit.prevent="createTournament">
    <div class="field" aria-autocomplete="false">
      <label class="label">Navn på turnering:</label>
      <div class="control">
        <input
          v-model="tournamentName"
          class="input"
          type="text"
          placeholder="f.eks. Kragerø Grand Prix 2020"
          required
        />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Beskrivelse:</label>
      <div class="control">
        <textarea
          class="textarea"
          type="text"
          v-model="description"
          rows="5"
          placeholder="f.eks. Kragerø Sjakklubb ønsker alle hjertelig velkommen til Kragerø Grand Prix 2020."
          required
        />
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Startkontigent:</label>
      <div class="control">
        <input v-model="price" class="input" type="text" placeholder="La stå tom for gratis" />
      </div>
    </div>

    <button type="submit" class="button is-success">Success</button>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';
import { nanoid } from 'nanoid';

export default {
  setup() {
    const API_URL = `http://localhost:5000/api/v1/tournaments/${nanoid(4)}`;

    const tournamentName = ref('');
    const description = ref('');
    const price = ref('');
    // const date = ref('');
    // const place = ref('');
    // const organizer = ref('');
    // const arbitor = ref('');
    // const players = ref('');

    async function createTournament() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          tournamentName: tournamentName.value,
          description: description.value,
          price: price.value,
        }),
      });

      const json = await response.json();
      console.log(json);
    }

    return {
      tournamentName,
      description,
      price,
      createTournament,
    };
  },
};
</script>

<style>
</style>
