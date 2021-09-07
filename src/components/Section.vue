<script setup>
const props = defineProps({ // eslint-disable-line no-undef
  lightBg: Boolean,
  title: String,
  href: String
});

const bgColor = props.lightBg ? 'bg-light' : 'bg-dark';
const textColor = props.lightBg ? 'text-dark' : 'text-light';
</script>

<template>
<div v-if="title" :class="`px-3 rounded-t-md shadow-md ${bgColor} ${textColor} max-w-max text-lg`">
  <a :href="href" target="_blank">
    <span :class="href ? 'underline' : ''">{{ title.toUpperCase() }}</span>
    <i v-if="href" class="fas fa-link ml-1" />
  </a>
</div>
<div :class="`rounded-tr-md shadow-md ${bgColor} ${textColor}`">
  <slot />
</div>
</template>
