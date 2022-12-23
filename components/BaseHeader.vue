<script setup>
const story = ref(null);
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/header', {
  version: 'draft',
  resolve_links: 'url',
})
const content = data.story.content;
const logo = content.logo;
const menu = content.menu;
</script>
 
<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink to="/" class="btn-ghost btn normal-case">
        <NuxtImg :src="logo" />
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ThemeSelector />
      <div class="dropdown-bottom dropdown-end dropdown">
        <label tabindex="0" class="btn-ghost btn-square btn">
          <Icon name="healthicons:ui-menu-grid" class="h-5 w-5" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box bg-base-100 w-52 p-2 shadow"
        >
          <li v-for="menuItem in menu">
            <template v-if="menuItem.link_item.linktype === 'story'">
              <NuxtLink :to="menuItem.link_item.story.url">
                {{ menuItem.link_item.story.name }}
              </NuxtLink>
            </template>
            <template v-if="menuItem.link_item.linktype === 'url'">
              <NuxtLink :to="menuItem.link_item.url" :target="menuItem.link_item.target">
                {{ menuItem.link_item.title }}
              </NuxtLink>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
