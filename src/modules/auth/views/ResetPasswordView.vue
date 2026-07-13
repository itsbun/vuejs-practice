<template>
  <AuthTitle
    title="Set a new password"
    description="Choose a strong password you haven't used before. It must be at least 8 characters."
    :icon="lockIcon"
  />

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

  <BaseLink :to="paths.login" fontSize="md" class="flex items-center justify-center gap-1">
    <img :src="arrowLeftIcon" alt="Arrow icon" /> Back to sign in
  </BaseLink>
</template>

<script setup lang="ts">
import { paths, required, password, match } from '@/shared/constants'
import { BaseButton, BaseInput, BaseLink } from '@/shared/ui'
import { arrowLeftIcon, lockIcon } from '@/shared/assets'
import { useFormValidation } from '@/shared/composables'
import { ref } from 'vue'
import { AuthTitle } from '../components'

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
    alert('Password updated successfully.')
  } else {
    console.log(errors.value)
  }
}
</script>
