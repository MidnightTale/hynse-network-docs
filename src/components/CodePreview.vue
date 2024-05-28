<script setup>
import { ref } from "vue";
const slot = ref(null);
</script>

<template>
  <div ref="slot">
    <slot />
  </div>

  <div v-html="slot?.textContent" />
</template>