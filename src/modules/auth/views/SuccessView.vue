<script setup lang="ts">
import { BaseButton } from '@/shared/ui'
import { successIcon } from '@/shared/assets'
import { AuthTitle } from '../components';
</script>

<template>
  <AuthTitle
    title="You're all set!"
    description="Your email has been verified and your account is ready. Welcome to Northwind — let's get you to your workspace."
    center
    :icon="successIcon"
  />

  <form>
    <BaseButton type="submit" class="mb-5 w-full">Continue to dashboard</BaseButton>
  </form>

  <p class="text-text-muted mb-5 pt-1 text-center text-xs/4 font-normal">
    Redirecting you automatically in 1 second…
  </p>
</template>
