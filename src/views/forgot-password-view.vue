<script setup lang="ts">
import { paths, required, email } from '@/constants'
import { BaseButton, BaseInput, BaseLink } from '@/components'
import { arrowLeftIcon, emailIcon } from '@/assets'
import { useFormValidation } from '@/composables'
import { ref } from 'vue'

const form = ref({
  email: '',
})

const rules = {
  email: [required('Email'), email()],
}

const { errors, validateAll, resetErrors } = useFormValidation(form, rules)

const onSubmit = () => {
  if (validateAll()) {
    Object.assign(form.value, {
      email: '',
    })
    resetErrors()
  } else {
    console.log(errors.value)
  }
}
</script>

<template>
  <div
    class="xs:rounded-xl xs:w-[95%] mx-auto flex flex-col justify-center bg-white p-4 py-10 sm:col-span-6 sm:w-full sm:rounded-l-none sm:rounded-r-2xl md:px-8 lg:px-12 xl:px-20"
  >
    <div class="flex flex-col gap-5">
      <img :src="emailIcon" alt="Email icon" class="h-12 w-12" />

      <div>
        <h2 class="text-2xl/8 font-bold text-black">Forgot password?</h2>
        <p class="text-text-muted mb-5 pt-1 text-sm leading-[22.75px] font-normal">
          No problem. Enter the email tied to your account and we'll send you a reset link.
        </p>
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="mb-5 flex flex-col gap-5">
        <BaseInput
          v-model="form.email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          :error="errors.email"
        />
      </div>

      <BaseButton type="submit" class="mb-5 w-full">Send reset link</BaseButton>
    </form>

    <BaseLink :to="paths.login" fontSize="md" class="flex items-center justify-center gap-1"
      ><img :src="arrowLeftIcon" alt="Arrow icon" /> Back to sign in
    </BaseLink>
  </div>
</template>
