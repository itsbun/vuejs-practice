<script setup lang="ts">
import { computed } from 'vue'

interface BaseButtonProps {
  icon?: string
  variant?: 'primary' | 'secondary'
  padding?: 'primary' | 'secondary'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'primary',
  padding: 'primary',
  disabled: false,
  loading: false,
  type: 'button',
})

const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-white',
} as const

const paddingClasses = {
  primary: 'p-3',
  secondary: 'px-4 py-2.5',
} as const

const buttonClasses = computed(() => [
  'inline-flex cursor-pointer items-center justify-center rounded-xl text-sm font-semibold transition duration-500 hover:scale-101',
  variantClasses[props.variant],
  paddingClasses[props.padding],
  !(props.disabled || props.loading) && 'hover:shadow-lg',
  (props.disabled || props.loading) && 'cursor-not-allowed opacity-50',
])
</script>

<template>
  <button :type="type" :disabled="disabled || loading" :class="buttonClasses">
    <span v-if="$slots.icon" class="mr-2 inline-flex">
      <slot name="icon" />
    </span>

    <span
      v-if="loading"
      class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />

    <slot />
  </button>
</template>
