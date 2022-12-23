<script lang="ts" setup>
import "@fontsource/inter-tight/100.css";
import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/400-italic.css";
import "@fontsource/inter-tight/700.css";
import "@fontsource/inter-tight/900.css";
</script>

<template>
  <SeoKit />
  <OgImageScreenshot />
  <BaseHeader />
  <div class="lg:container lg:mx-auto">
    <NuxtPage />
  </div>
  <BaseFooter />
</template>

<style lang="scss">
body {
  font-family: "Inter Tight", sans-serif;
}
</style>
