/* eslint no-trailing-spaces: 1 */
// trailing space _

import Vue from 'vue';
import VueRouter from 'vue-router';
import TournamentsList from '@/components/TournamentsList.vue';
import CreateTournament from '@/components/CreateTournament.vue';
import Tournament from '@/components/Tournament.vue';
import TournamentPlayers from '@/components/TournamentPlayers.vue';
import CreateUser from '@/components/CreateUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Tournaments',
    component: TournamentsList,
  },
  {
    path: '/createTournament',
    component: CreateTournament,
  },
  {
    name: 'tournament',
    path: '/tournament',
    component: Tournament,
    props(route) {
      return {
        id: route.query.id,
      };
    },
  },
  {
    name: 'players',
    path: '/players',
    component: TournamentPlayers,
    props(route) {
      return {
        id: route.query.id,
      };
    },
  },
  {
    name: 'createUser',
    path: '/createUser',
    component: CreateUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
