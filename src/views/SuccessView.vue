<script setup lang="ts">
import { BaseButton } from '@/components'
import { successIcon } from '@/assets'
</script>

<template>
  <div
    class="xs:rounded-xl xs:w-[95%] mx-auto flex flex-col justify-center bg-white p-4 py-10 text-center sm:col-span-6 sm:w-full sm:rounded-l-none sm:rounded-r-2xl md:px-8 lg:px-12 xl:px-20"
  >
    <div class="flex flex-col items-center gap-5">
      <img
        :src="successIcon"
        alt="Email icon"
        class="h-12 w-12 rounded-full hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]"
      />

      <div>
        <h2 class="text-2xl/8 font-bold text-black">You're all set!</h2>

        <p class="text-text-muted mb-5 pt-1 text-sm leading-[22.75px] font-normal">
          Your email has been verified and your account is ready. Welcome to Northwind — let's get
          you to your workspace.
        </p>
      </div>
    </div>

    <form>
      <BaseButton type="submit" class="mb-5 w-full">Continue to dashboard</BaseButton>
    </form>

    <p class="text-text-muted mb-5 pt-1 text-xs/4 font-normal">
      Redirecting you automatically in 1 second…
    </p>
  </div>
</template>
