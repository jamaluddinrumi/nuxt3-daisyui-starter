<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        Nuxt 3 + Daisy UI
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ThemeSelector />
      <div class="dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn btn-square btn-ghost">
          <Icon name="healthicons:ui-menu-grid" class="w-5 h-5" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
