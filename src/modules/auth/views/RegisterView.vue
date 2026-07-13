<script setup lang="ts">
import { BaseButton, BaseInput, BaseLink } from '@/shared/ui'
import { useFormValidation } from '@/shared/composables'
import { email, match, minLength, password, paths, required } from '@/shared/constants'
import { ref } from 'vue'
import { AuthTitle, SocialLoginOptions } from '../components'

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
    alert('Account created successfully.')
  } else {
    console.log(errors.value)
  }
}
</script>

<template>
  <div>
    <AuthTitle
      title="Create your account"
      description="Start your 14-day free trial. No card required."
    />

    <SocialLoginOptions dividerText="or" />
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
</template>
