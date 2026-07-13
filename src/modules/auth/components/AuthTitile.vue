<template>
  <div
    :class="[
      'flex flex-col',
      icon || $slots.icon ? 'gap-5' : '',
      center ? 'items-center text-center' : '',
    ]"
  >
    <slot name="icon">
      <img v-if="icon" :src="icon" alt="Title icon" class="h-12 w-12" />
    </slot>

    <div>
      <h2 class="text-2xl/8 font-bold text-black">{{ title }}</h2>

      <p class="text-text-muted mb-5 pt-1 text-sm leading-[22.75px] font-normal">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AuthTitleProps {
  title: string
  description: string
  icon?: string
  center?: boolean
}

defineProps<AuthTitleProps>()
</script>
