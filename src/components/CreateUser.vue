<template>
  <div class="pt-6">
    <script
      type="application/javascript"
      defer
      src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
    ></script>

    <div class="field">
      <label class="label">Fullt navn:</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Brukernavn (brukes når du skal logge inn)</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Passord:</label>
      <div class="control">
        <input class="input" type="password" />
      </div>
    </div>

    <!-- <div class="field">
      <div class="control">
        <label class="checkbox">
          <input @change="checkFide($event)" type="checkbox" />
          Jeg har en FIDE-tittel
        </label>
      </div>
    </div>

    <div v-if="hasFideTitle" class="field">
      <label class="label">Lenke til FIDE-profil:</label>
      <div class="control">
        <input @change="checkUrl" class="input" type="text" />
      </div>
    </div> -->

    <span v-if="hasFideTitle" class="tag is-success is-light">Success</span>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          Jeg tillater at min informasjon blir lagret i en database
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control pt-3">
        <button class="button is-success">Opprett bruker</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const hasFideTitle = ref(false);

    function checkFide($event) {
      const isChecked = $event.srcElement.checked;
      hasFideTitle.value = isChecked;
    }

    function checkUrl($event) {
      console.log($event.srcElement.className);
    }

    return {
      checkFide,
      hasFideTitle,
      checkUrl,
    };
  },
};
</script>

<style>
</style>
