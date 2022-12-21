<script lang="ts" setup>
const story = await useAsyncStoryblok("about", { version: "draft" });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <NuxtPicture
    src="https://a.storyblok.com/f/136623/3024x4032/d42625ee2b/rusa.JPG"
  />
</template>
