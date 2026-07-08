<script setup lang="ts">
interface BaseLinkProps {
  to: string
  fontSize?: 'sm' | 'md'
}

const props = withDefaults(defineProps<BaseLinkProps>(), {
  fontSize: 'sm',
})

const fontSizeClasses = {
  sm: 'text-sm/5',
  md: 'text-base/6',
}
</script>

<template>
  <RouterLink
    :to="to"
    :class="['text-primary font-semibold tracking-normal', fontSizeClasses[props.fontSize]]"
  >
    <slot />
  </RouterLink>
</template>
