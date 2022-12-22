<script lang="ts" setup>
const story = await useAsyncStoryblok("homepage", { version: "draft" });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <NuxtPicture
    class="flex justify-center"
    src="https://a.storyblok.com/f/136623/2096x3724/fa67947384/lucu.jpeg"
    :modifiers="{ filters: { rotate: 270 } }"
  />
</template>
