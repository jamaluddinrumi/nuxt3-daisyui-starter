<script lang="ts" setup>
const story = await useAsyncStoryblok("about", { version: "draft" });
</script>

<template>
  <Head>
    <Title>{{ story.content.meta.title }}</Title>
    <Meta name="description" :content="story.content.meta.description" />
  </Head>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
