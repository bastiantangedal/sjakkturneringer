<template>
  <div class="pt-6">
    <form @submit.prevent="createUser">
      <div class="field">
        <label class="label">Navn:</label>
        <div class="control">
          <input v-model="name" class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Brukernavn</label>
        <div class="control">
          <input v-model="username" class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Passord:</label>
        <div class="control">
          <input v-model="password" class="input" type="password" />
        </div>
      </div>

      <div @submit.prevent="createUser" class="field is-grouped">
        <div class="control pt-3">
          <button class="button is-success">Opprett bruker</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const name = ref('');
    const username = ref('');
    const password = ref('');

    const API_URL = 'http://localhost:5000/api/v1/auth/register';

    async function createUser() {
      if (name.value.length < 10) {
        alert('Navnet må være lenger enn 10 bokstaver.');
        return;
      }
      if (username.value.length < 5) {
        alert('Brukernavnet må være minst 5 bokstaver.');
        return;
      }
      if (password.value.length < 5) {
        alert('Passordet er for kort.');
        return;
      }

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          username: username.value,
          password: password.value,
        }),
      });

      const json = await response.json();
      if (json === 'A user with that exact name already exists') {
        alert('En annen bruker med det navnet finnes allerede.');
        return;
      }
      if (json === 'A user with that username already exists') {
        alert('En bruker med det brukernavnet finnes allerde');
        return;
      }

      this.$router.push('/');
    }

    return {
      name,
      username,
      password,
      createUser,
    };
  },
};
</script>

<style>
</style>
