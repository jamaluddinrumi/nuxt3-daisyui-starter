<script lang="ts" setup>
const story = await useAsyncStoryblok('homepage', { version: 'draft' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
