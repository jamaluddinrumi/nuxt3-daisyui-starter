<template>
  <div
    v-editable="blok"
    :cat="$attrs.cat"
    class="mb-6 py-8 text-center text-5xl font-bold"
    data-test="teaser"
  >
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
