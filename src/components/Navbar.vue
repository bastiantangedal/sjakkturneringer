<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" v-on:click="tournaments">Se turneringer</a>
        <a class="navbar-item" v-on:click="createTournament">Opprett turnering</a>
        <!-- <a class="navbar-item" href="https://ratings.fide.com/search.phtml">FIDE-søk</a> -->
      </div>
      <div class="navbar-end">
        <!-- <a class="navbar-item" href="https://lichess.org">
          <img src="@/assets/lichess-icon.png" alt="Lichess.org" />
        </a>
        <a class="navbar-item" href="https://chess.com">
          <img src="@/assets/chess.png" alt="chess.com" />
        </a> -->
        <a class="navbar-item" v-on:click="createUser">Opprett bruker</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    tournaments() {
      this.$router.push('/');
    },
    createTournament() {
      this.$router.push('/createTournament');
    },
    createUser() {
      this.$router.push('/createUser');
    },
  },
};
</script>

<style>
</style>
