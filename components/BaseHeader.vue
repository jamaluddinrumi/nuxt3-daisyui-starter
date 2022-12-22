<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink to="/" class="btn-ghost btn normal-case">
        <span class="text-xl font-bold">Nuxt 3 + Daisy UI</span>
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
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about"> About </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
