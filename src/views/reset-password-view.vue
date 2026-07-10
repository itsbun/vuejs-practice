<script setup lang="ts">
import { paths, required, password, match } from '@/constants'
import { BaseButton, BaseInput, BaseLink } from '@/components'
import { arrowLeftIcon, lockIcon } from '@/assets'
import { useFormValidation } from '@/composables'
import { ref } from 'vue'

const form = ref({
  password: '',
  confirmPassword: '',
})

const rules = {
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
    <div class="flex flex-col gap-5">
      <img :src="lockIcon" alt="Email icon" class="h-12 w-12" />

      <div>
        <h2 class="text-2xl/8 font-bold text-black">Set a new password</h2>
        
        <p class="text-text-muted mb-5 pt-1 text-sm leading-[22.75px] font-normal">
          Choose a strong password you haven't used before. It must be at least 8 characters.
        </p>
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="mb-5 flex flex-col gap-5">
        <BaseInput
          v-model="form.password"
          type="password"
          label="New password"
          placeholder="Create a new password"
          :error="errors.password"
        />
        <BaseInput
          v-model="form.confirmPassword"
          type="password"
          label="Confirm new password"
          placeholder="Re-enter your new password"
          :error="errors.confirmPassword"
        />
      </div>

      <BaseButton type="submit" class="mb-5 w-full">Update password</BaseButton>
    </form>

    <BaseLink :to="paths.login" fontSize="md" class="flex items-center justify-center gap-1"
      ><img :src="arrowLeftIcon" alt="Arrow icon" /> Back to sign in
    </BaseLink>
  </div>
</template>
