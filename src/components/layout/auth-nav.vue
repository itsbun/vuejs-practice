<script setup lang="ts">
import { authNavigationItems } from '@/constants'
import { BaseLink } from '../ui'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (href: string) => route.path === href
</script>

<template>
  <header
    class="scrollbar-hide flex w-full items-center overflow-x-auto bg-white px-4 py-3 shadow-sm"
  >
    <nav class="flex items-center text-sm font-medium text-nowrap text-gray-500">
      <template v-for="(item, index) in authNavigationItems" :key="item.href">
        <BaseLink
          :to="item.href"
          :class="[
            'flex items-center rounded-2xl px-3 py-1 font-semibold transition-all duration-600 ease-in-out',
            isActive(item.href)
              ? 'bg-primary scale-105 text-white shadow-sm'
              : 'text-text-muted hover:bg-primary hover:scale-105 hover:text-white',
          ]"
        >
          <span>{{ item.order }}</span>

          <span class="mx-2 leading-none">&middot;</span>

          <span>{{ item.label }}</span>
        </BaseLink>

        <span v-if="index < authNavigationItems.length - 1" class="mx-2 leading-none text-gray-400">
          &middot;
        </span>
      </template>
    </nav>
  </header>
</template>
