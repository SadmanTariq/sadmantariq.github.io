<script setup>
defineProps({ // eslint-disable-line no-undef
  heading: String,
  imageSrc: String,
  href: String
});
</script>

<template>
<!-- <a :href="href" class="card rounded-lg shadow-xl">
  <div class="w-full bg-white rounded-t-lg overflow-hidden">
    <img :src="imageSrc" alt="Thumbnail" class="rounded-t-lg bg-white object-cover object-center">
  </div>
  <div class="p-3">
    <h1 v-if="heading" class="underline">{{ heading }}</h1>
    <p class="font-light text-sm max-w-max">
      <slot />
    </p>
  </div>
</a> -->
<a :href="href" class="card rounded-lg shadow-md w-auto">
  <img :src="imageSrc" :alt="heading + ' thumbnail'" class="rounded-t-lg w-full">
  <div class="p-3">
    <h1 class="underline">{{ heading }}</h1>
    <p class="font-light text-sm block">
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
