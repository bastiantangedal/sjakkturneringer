<template>
  <div class="pt-6">
    <div class="field">
      <label class="label">Navn:</label>
      <div class="control">
        <input class="input" type="text"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Brukernavn</label>
      <div class="control">
        <input
          class="input"
          type="text"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Passord:</label>
      <div class="control">
        <input
          class="input"
          type="password"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">FIDE-tittel</label>
      <div class="control">
        <div class="select">
          <select>
            <option></option>
            <option>CM</option>
            <option>FM</option>
            <option>IM</option>
            <option>GM</option>
            <option>WCM</option>
            <option>WFM</option>
            <option>WIM</option>
            <option>WGM</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          Jeg tillater at min informasjon blir lagret i en database
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-dark">Opprett bruker</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
