<template>
  <div class="p-6">
    <h2 class="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
    <div class="space-y-4">
      <div class="border-b border-gray-300 pb-2">
        <button class="w-full text-left font-semibold" @click="toggle(0)">
          What is the uptime guarantee?
        </button>
        <p v-if="activeQuestion === 0" class="mt-2">We guarantee 99.9% uptime for all hosting plans.</p>
      </div>
      <div class="border-b border-gray-300 pb-2">
        <button class="w-full text-left font-semibold" @click="toggle(1)">
          How do I contact support?
        </button>
        <p v-if="activeQuestion === 1" class="mt-2">You can contact support via the live chat or email us directly.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeQuestion: null,
    };
  },
  methods: {
    toggle(index) {
      this.activeQuestion = this.activeQuestion === index ? null : index;
    },
  },
};
</script>
