<script setup lang="ts">
import { checkboxIcon, logoIcon } from '@/assets'
import { AuthNav } from '@/components'

const termConditions = [
  'Encrypted credentials',
  'Email verification built-in',
  'Password recovery flow',
]
</script>

<template>
  <main class="bg-page-background min-h-screen">
    <AuthNav />

    <section on class="xs:py-4 flex w-full justify-center sm:px-5 sm:py-8 lg:px-31">
      <div class="grid max-w-4xl rounded-2xl shadow-md sm:grid-cols-10">
        <div
          class="xs:hidden col-span-4 flex min-h-173.75 flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-[linear-gradient(135deg,#6C63FF_0%,#4F46E5_40%,#7C6AF7_100%)] p-10 sm:grid"
        >
          <div class="flex items-center gap-3">
            <img :src="logoIcon" alt="logo" />
            <p class="text-lg/7 font-semibold tracking-[-0.45px] text-white">Northwind</p>
          </div>

          <div class="absolute">
            <div class="absolute -top-2 left-25 h-70 w-70 rounded-full bg-white/35 opacity-20">
              <div class="absolute top-17 left-1 h-45 w-45 rounded-full bg-white/50"></div>
            </div>
          </div>

          <div class="text-white">
            <h1 class="text-3xl/[37.5px] font-bold">One account for everything your team ships.</h1>
            <p class="text-sm/[22.75px] font-normal opacity-70">
              Secure sign-in, instant onboarding, and a verified inbox - all in a few clicks.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <div v-for="(term, item) in termConditions" :key="item">
              <p class="flex gap-2 text-sm font-normal text-white opacity-80">
                <img :src="checkboxIcon" alt="" />
                {{ term }}
              </p>
            </div>
          </div>
        </div>

        <slot />
      </div>
    </section>
  </main>
</template>
