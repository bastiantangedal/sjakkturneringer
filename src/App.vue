<template>
  <div id="app">
    <Navbar />
    <div class="ml-6 mt-5">
      <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter">
        <router-view/>
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
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  /*overflow: hidden;*/
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
