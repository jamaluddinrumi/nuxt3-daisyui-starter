<template>
  <Breadcrumbs>
    <template #breadcrumb="{ to, title }">
      <NuxtLink :to="to">
        {{ title }}
      </NuxtLink>
    </template>
  </Breadcrumbs>
</template>
