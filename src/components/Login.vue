!<template>
  <div class="pt-6">
    <div class="field">
        <label class="label">Brukernavn:</label>
        <div class="control">
          <input v-model="username" class="input" type="text" required/>
        </div>
      </div>

      <div class="field">
        <label class="label">Passord:</label>
        <div class="control">
          <input v-model="password" class="input" type="password" required/>
        </div>
      </div>

      <div class="field is-grouped pt-5 is-grouped-centered">
        <div class="control">
          <button v-on:click="login" class="button is-success">Logg inn</button>
        </div>
        <div class="control">
          <button v-on:click="createUser" class="button is-dark">Registrer en ny bruker</button>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import state from '@/store/dyi';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    function login() {
      if (username.value === '' || password.value === '') {
        // eslint-disable-next-line no-alert
        alert('Du må fylle inn et brukernavn og passord.');
        return;
      }

      state.login(username, password);
    }

    function createUser() {
      this.$router.push('/register');
    }

    return {
      username,
      password,
      login,
      createUser,
    };
  },
};
</script>

<style>
</style>
