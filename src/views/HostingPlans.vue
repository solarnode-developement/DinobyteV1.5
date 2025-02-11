<template>
  <div class="p-6">
    <h2 class="text-3xl font-semibold text-center mb-6">Our Hosting Plans</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div class="bg-lavender-blue p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <h3 class="text-2xl font-bold">Basic Plan</h3>
        <p class="mt-4">Perfect for personal websites.</p>
        <p class="text-xl font-semibold mt-2">$9.99/month</p>
        <router-link to="#" class="block mt-4 text-center text-blue-500">Choose Plan</router-link>
      </div>
      <div class="bg-lavender-blue p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <h3 class="text-2xl font-bold">Pro Plan</h3>
        <p class="mt-4">For growing businesses with more power.</p>
        <p class="text-xl font-semibold mt-2">$19.99/month</p>
        <router-link to="#" class="block mt-4 text-center text-blue-500">Choose Plan</router-link>
      </div>
      <div class="bg-lavender-blue p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <h3 class="text-2xl font-bold">Enterprise Plan</h3>
        <p class="mt-4">For enterprises with high demand.</p>
        <p class="text-xl font-semibold mt-2">$49.99/month</p>
        <router-link to="#" class="block mt-4 text-center text-blue-500">Choose Plan</router-link>
      </div>
    </div>
  </div>
</template>
