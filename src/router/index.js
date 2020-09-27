/* eslint no-trailing-spaces: 1 */
// trailing space _

import Vue from 'vue';
import VueRouter from 'vue-router';
import TournamentsList from '@/components/TournamentsList.vue';
import CreateTournament from '@/components/CreateTournament.vue';
import Tournament from '@/components/Tournament.vue';

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
    path: '/tournament',
    component: Tournament,
    props(route) {
      return {
        name: route.query.name, 
        description: route.query.description, 
        place: route.query.place, 
        date: route.query.date, 
        organizer: route.query.organizer, 
        arbitor: route.query.arbitor,
      };
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
