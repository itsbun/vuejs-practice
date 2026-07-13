<script setup lang="ts">
import { EXTERNAL_LOGIN_OPTIONS } from '@/shared/constants'
import { BaseButton } from '@/shared/ui'

interface SocialLoginOptionsProps {
  buttonPrefix?: string
  dividerText?: string
}

withDefaults(defineProps<SocialLoginOptionsProps>(), {
  buttonPrefix: '',
  dividerText: 'or sign in with email',
})
</script>

<template>
  <div>
    <div class="xs:flex xs:flex-col xs:items-center mb-5 flex justify-between gap-3 sm:flex-row">
      <div v-for="option in EXTERNAL_LOGIN_OPTIONS" :key="option.name" class="xs:w-full">
        <BaseButton :variant="'secondary'" class="border-border xs:w-full flex w-42.5 gap-2 border">
          <img :src="option.icon" :alt="`${option.name} Icon`" />

          {{ buttonPrefix }}{{ option.name }}
        </BaseButton>
      </div>
    </div>

    <div class="flex items-center gap-4 p-1">
      <div class="flex-1 border-t border-gray-300"></div>
      <span class="text-sm whitespace-nowrap text-gray-500"> {{ dividerText }} </span>
      <div class="flex-1 border-t border-gray-300"></div>
    </div>
  </div>
</template>
