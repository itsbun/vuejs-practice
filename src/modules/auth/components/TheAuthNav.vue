<template>
  <header
    class="scrollbar-hide flex w-full items-center overflow-x-auto bg-white px-4 py-3 shadow-sm"
  >
    <nav class="flex items-center text-sm font-medium text-nowrap text-gray-500">
      <template v-for="(item, index) in AUTH_NAVIGATION_ITEMS" :key="item.href">
        <BaseLink :to="item.href" :class="getLinkClass(item.href)">
          <span>{{ item.order }}</span>

          <span class="mx-2 leading-none">&middot;</span>

          <span>{{ item.label }}</span>
        </BaseLink>

        <span
          v-if="index < AUTH_NAVIGATION_ITEMS.length - 1"
          class="mx-2 leading-none text-gray-400"
        >
          &middot;
        </span>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { AUTH_NAVIGATION_ITEMS } from '@/shared/constants'
import { BaseLink } from '@/shared/ui'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (href: string) => route.path === href

const getLinkClass = (href: string) => {
  const base =
    'flex items-center rounded-2xl px-3 py-1 font-semibold transition-all duration-600 ease-in-out'

  if (isActive(href)) {
    return `${base} bg-primary scale-105 text-white shadow-sm`
  }

  return `${base} text-text-muted hover:bg-primary hover:scale-105 hover:text-white`
}
</script>
