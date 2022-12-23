<script lang="ts" setup>
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/footer", {
  version: "draft",
  resolve_links: "url",
});
const content = data.story.content;

const config = useRuntimeConfig();
</script>
<template>
  <footer
    class="footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content"
  >
    <div class="grid-flow-col items-center">
      <NuxtLink>
        <NuxtImg :src="content.logo" sizes="lg:32px" />
      </NuxtLink>
      <p>
        {{ content.title }}<br />
        {{ content.description }}
      </p>
    </div>
    <div class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <NuxtLink :to="content.tiktok.url" target="_blank">
          <Icon name="logos:tiktok-icon" class="h-5 w-5" />
        </NuxtLink>
        <NuxtLink :to="content.youtube.url" target="_blank">
          <Icon name="logos:youtube-icon" class="h-5 w-5" />
        </NuxtLink>
        <NuxtLink :to="content.facebook.url" target="_blank">
          <Icon name="logos:facebook" class="h-5 w-5" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
