<script setup lang="ts">
import { useFormValidation } from '@/shared/composables'
import { email, password, paths, required } from '@/shared/constants'
import { ref } from 'vue'
import { AuthTitle, SocialLoginOptions } from '../components'
import { BaseButton, BaseInput, BaseLink } from '@/shared/ui'

const form = ref({
  email: '',
  password: '',
})

const rules = {
  email: [required('Email'), email()],
  password: [required('Password'), password()],
}

const { errors, validateAll, resetErrors } = useFormValidation(form, rules)

const onSubmit = () => {
  if (validateAll()) {
    Object.assign(form.value, {
      email: '',
      password: '',
    })
    resetErrors()
    alert('Signed in successfully.')
  } else {
    console.log(errors.value)
  }
}
</script>

<template>
  <div>
    <AuthTitle title="Welcome back" description="Sign in to continue to your workspace." />

    <SocialLoginOptions buttonPrefix="Continue with " />
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
      <BaseInput
        v-model="form.password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        :error="errors.password"
      />
    </div>

    <div class="flex justify-between pb-5 text-sm/5 font-semibold">
      <div class="flex items-center gap-2">
        <input type="checkbox" class="hover:cursor-pointer" />

        <span class="text-text-muted">Remember me</span>
      </div>

      <BaseLink :to="paths.forgotPassword"> Forgot Password? </BaseLink>
    </div>

    <BaseButton type="submit" class="mb-5 w-full">Sign in</BaseButton>
  </form>

  <div class="flex items-center justify-center gap-1">
    <p class="text-text-muted text-sm/5 font-normal">Don't have an account?</p>
    <BaseLink :to="paths.register" fontSize="md"> Sign up </BaseLink>
  </div>
</template>
