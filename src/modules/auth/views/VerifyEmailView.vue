<script setup lang="ts">
import { paths, required, minLength } from '@/shared/constants'
import { BaseButton, BaseLink, OtpInput } from '@/shared/ui'
import { arrowLeftIcon, emailIcon } from '@/shared/assets'
import { useFormValidation } from '@/shared/composables'
import { ref } from 'vue'
import { AuthTitle } from '../components'

const form = ref({
  otp: '',
})

const rules = {
  otp: [required('OTP Code'), minLength(6, 'OTP Code')],
}

const { errors, validateAll, resetErrors } = useFormValidation(form, rules)

const onSubmit = () => {
  if (validateAll()) {
    Object.assign(form.value, {
      otp: '',
    })
    resetErrors()
    alert('Email verified successfully.')
  } else {
    console.log(errors.value)
  }
}
</script>

<template>
  <AuthTitle
    title="Verify your email"
    description="We sent a 6-digit code to your email. Enter it below to confirm your address."
    :icon="emailIcon"
  />

  <form @submit.prevent="onSubmit">
    <div class="mb-5 flex flex-col gap-5">
      <OtpInput id="otp-email" v-model="form.otp" :error="errors.otp" />
      <p v-if="errors.otp" class="text-xs text-red-500 italic">{{ errors.otp }}</p>
    </div>

    <BaseButton type="submit" class="mb-5 w-full">Verify email</BaseButton>
  </form>

  <div class="flex flex-col items-center justify-center gap-1">
    <div class="flex items-center gap-2">
      <p class="text-text-muted text-sm/5 font-normal">Didn't get it?</p>

      <BaseLink :to="'/'" fontSize="md">Resend code</BaseLink>
    </div>

    <div>
      <BaseLink :to="paths.login" fontSize="sm" class="flex items-center justify-center gap-1"
        ><img :src="arrowLeftIcon" alt="Arrow icon" /> Back to sign in
      </BaseLink>
    </div>
  </div>
</template>
