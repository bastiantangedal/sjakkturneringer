import Vue from 'vue';
import VueRouter from 'vue-router';
import TournamentsList from '@/components/TournamentsList.vue';
import CreateTournament from '@/components/CreateTournament.vue';

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
];

const router = new VueRouter({
  routes,
});

export default router;
