<script setup lang="ts">
import { EXTERNAL_LOGIN_OPTIONS, paths } from '@/constants'
import { BaseButton, BaseInput, BaseLink } from '@/components'
</script>

<template>
  <div
    class="xs:rounded-xl flex w-full flex-col justify-center bg-white p-4 sm:col-span-6 sm:rounded-l-none sm:rounded-r-2xl md:px-8 lg:px-12 xl:px-20"
  >
    <div>
      <h2 class="text-2xl/8 font-bold text-black">Welcome back</h2>
      <p class="text-text-muted mb-5 pt-1 text-sm/5 font-normal">
        Sign in to continue to your workspace.
      </p>

      <div class="xs:flex xs:flex-col xs:items-center mb-5 flex justify-between gap-3 sm:flex-row">
        <div v-for="option in EXTERNAL_LOGIN_OPTIONS" :key="option.name" class="xs:w-full">
          <BaseButton
            :variant="'secondary'"
            class="border-border xs:w-full flex w-42.5 gap-2 border"
          >
            <img :src="option.icon" :alt="`${option.name} Icon`" />
            Continue with {{ option.name }}
          </BaseButton>
        </div>
      </div>

      <div class="flex items-center gap-4 p-1">
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="text-sm whitespace-nowrap text-gray-500"> or sign in with email </span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>
    </div>

    <form>
      <div class="mb-5 flex flex-col gap-5">
        <BaseInput type="email" label="Email" placeholder="you@company.com" />
        <BaseInput type="password" label="Password" placeholder="Enter your password" />
      </div>

      <div class="flex justify-between pb-5 text-sm/5 font-semibold">
        <div class="flex items-center gap-2">
          <input type="checkbox" class="hover:cursor-pointer" />
          <span class="text-text-muted">Remember me</span>
        </div>

        <BaseLink :to="paths.forgot_password"> Forgot Password? </BaseLink>
      </div>

      <BaseButton type="submit" class="mb-5 w-full">Sign in</BaseButton>
    </form>

    <div class="flex items-center justify-center gap-1">
      <p class="text-text-muted text-sm/5 font-normal">Don't have an account?</p>
      <BaseLink :to="paths.register" fontSize="md"> Sign up </BaseLink>
    </div>
  </div>
</template>
