<script setup lang="ts">
import { paths, required, minLength } from '@/constants'
import { BaseButton, BaseLink, OtpInput } from '@/components'
import { arrowLeftIcon, emailIcon } from '@/assets'
import { useFormValidation } from '@/composables'
import { ref } from 'vue'

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
        <h2 class="text-2xl/8 font-bold text-black">Verify your email</h2>

        <p class="text-text-muted mb-5 pt-1 text-sm leading-[22.75px] font-normal">
          We sent a 6-digit code to your email. Enter it below to confirm your address.
        </p>
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="mb-5 flex flex-col gap-5">
        <OtpInput id="otp-email" v-model="form.otp" />
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
  </div>
</template>
