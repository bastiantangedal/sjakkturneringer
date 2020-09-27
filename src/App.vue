<template>
  <div id="app">
    <Navbar />
    <div class="container mt-5">
      <router-view />
      <!-- <transition name="fade">
      </transition> -->
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
