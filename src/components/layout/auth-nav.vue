<script setup lang="ts">
import { authNavigationItems } from '@/constants'
import { BaseLink } from '../ui'
</script>

<template>
  <header
    class="scrollbar-hide flex w-full items-center overflow-x-auto bg-white px-4 py-3 shadow-sm"
  >
    <nav class="flex items-center text-sm font-medium text-nowrap text-gray-500">
      <template v-for="(item, index) in authNavigationItems" :key="item.href">
        <BaseLink
          :to="item.href"
          class="hover:bg-primary text-text-muted flex items-center rounded-2xl px-3 py-1 font-semibold hover:text-white"
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
