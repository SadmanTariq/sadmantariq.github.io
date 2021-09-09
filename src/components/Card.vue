<script setup>
defineProps({ // eslint-disable-line no-undef
  heading: String,
  imageSrc: String,
  href: String
});
</script>

<template>
<a :href="href" class="card rounded-lg shadow-xl w-1/4">
  <div class="w-full h-24 bg-white rounded-t-lg overflow-hidden">
    <img :src="imageSrc" alt="Thumbnail" class="rounded-t-lg bg-white object-cover object-center">
  </div>
  <div class="p-3">
    <h1 v-if="heading" class="underline">{{ heading }}</h1>
    <p class="font-light text-sm">
      <slot />
    </p>
  </div>
</a>
</template>

<style scoped>
@tailwind base;

@layer base {
  .card {
    @apply bg-light text-dark;
  }
  .bg-light > .card {
    @apply bg-dark text-light;
  }
}
</style>
