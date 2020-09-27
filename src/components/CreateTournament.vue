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
      <label class="label">Organisør (sjakklubb):</label>
      <div class="control">
        <input v-model="organizer" class="input" type="text" placeholder="F.eks Kragerø Sjakklubb" required/>
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Sted:</label>
      <div class="control">
        <input v-model="place" class="input" type="text" placeholder="F.eks. Kragerø Resort" required/>
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Dato:</label>
      <div class="control">
        <input v-model="date" class="input" type="text" placeholder="F.eks 14-17 desember 2020" required/>
      </div>
    </div>

    <div class="field" aria-autocomplete="false">
      <label class="label">Arbitør (fullt navn):</label>
      <div class="control">
        <input v-model="arbitor" class="input" type="text" placeholder="F.eks Hans Olav Lahlum" required/>
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
    const API_URL = `http://localhost:5000/api/v1/tournaments/${nanoid(1)}`;

    const tournamentName = ref('');
    const description = ref('');
    const price = ref('');
    const date = ref('');
    const place = ref('');
    const organizer = ref('');
    const arbitor = ref('');

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
          date: date.value,
          organizer: organizer.value,
          arbitor: arbitor.value,
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
      date,
      organizer,
      arbitor,
      price,
      createTournament,
    };
  },
};
</script>

<style>
</style>
