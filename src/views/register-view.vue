<script setup lang="ts">
import { BaseButton, BaseInput, BaseLink } from '@/components'
import { useFormValidation } from '@/composables/useFormValidation'
import {
  email,
  EXTERNAL_LOGIN_OPTIONS,
  match,
  minLength,
  password,
  paths,
  required,
} from '@/constants'
import { ref } from 'vue'

const form = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const rules = {
  fullName: [required('Full name'), minLength(3, 'Full name')],
  email: [required('Email'), email()],
  password: [required('Password'), password()],
  confirmPassword: [
    required('Confirm Password'),
    match(() => form.value.password, 'Confirm Password'),
  ],
}

const { errors, validateAll, resetErrors } = useFormValidation(form, rules)

const onSubmit = () => {
  if (validateAll()) {
    Object.assign(form.value, {
      email: '',
      password: '',
      confirmPassword: '',
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
    <div>
      <h2 class="text-2xl/8 font-bold text-black">Create your account</h2>
      <p class="text-text-muted mb-5 pt-1 text-sm leading-[22.75px] font-normal">
        Start your 14-day free trial. No card required.
      </p>

      <div class="xs:flex xs:flex-col xs:items-center mb-5 flex justify-between gap-3 sm:flex-row">
        <div v-for="option in EXTERNAL_LOGIN_OPTIONS" :key="option.name" class="xs:w-full">
          <BaseButton
            :variant="'secondary'"
            class="border-border xs:w-full flex w-42.5 gap-2 border"
          >
            <img :src="option.icon" :alt="`${option.name} Icon`" />
            {{ option.name }}
          </BaseButton>
        </div>
      </div>

      <div class="flex items-center gap-4 p-1">
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="text-sm whitespace-nowrap text-gray-500"> or </span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="mb-5 flex flex-col gap-5">
        <BaseInput
          v-model="form.fullName"
          type="text"
          label="Full name"
          placeholder="Avery Johnson"
          :error="errors.fullName"
        />
        <BaseInput
          v-model="form.email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          :error="errors.email"
        />
        <BaseInput
          v-model="form.password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          :error="errors.password"
        />
        <BaseInput
          v-model="form.confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Re-enter your password"
          :error="errors.confirmPassword"
        />
      </div>

      <div class="flex justify-between pb-5 text-sm/5 font-semibold">
        <div class="flex items-center gap-2">
          <input type="checkbox" class="hover:cursor-pointer" required />
          <span class="text-text-muted">
            I agree to the
            <BaseLink :to="'/'" :fontSize="'md'">Term of Service</BaseLink>
            and
            <BaseLink :to="'/'" :fontSize="'md'">Privacy Policy</BaseLink>
          </span>
        </div>
      </div>

      <BaseButton type="submit" class="mb-5 w-full">Create account</BaseButton>
    </form>

    <div class="flex items-center justify-center gap-1">
      <p class="text-text-muted text-sm/5 font-normal">Already have an account?</p>
      <BaseLink :to="paths.login" fontSize="md"> Sign in </BaseLink>
    </div>
  </div>
</template>
