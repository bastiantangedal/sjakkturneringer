<template>
  <div id="app">
    <Navbar />
    <div class="container mt-3">
      <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter">
        <router-view :key="$route.path"/>
      </transition>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  /* eslint-disable */
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  /* eslint-enable */
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  /*overflow: hidden*/;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
