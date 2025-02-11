<template>
  <div class="bg-dark-gray text-white">
    <header class="p-6">
      <h1 class="text-5xl font-bold text-center" ref="title">Welcome to Dinobyte Hosting</h1>
      <p class="text-center text-lg mt-4">The best hosting solution with performance and reliability.</p>
      <div class="text-center mt-6">
        <router-link to="/hosting" class="bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700">View Hosting Plans</router-link>
      </div>
    </header>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

export default {
  setup() {
    const title = ref(null);

    onMounted(() => {
      gsap.from(title.value, { opacity: 0, y: -100, duration: 1 });
    });

    return { title };
  }
};
</script>

<style scoped>
/* Add custom styles here */
</style>
