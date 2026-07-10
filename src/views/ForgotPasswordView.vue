<script setup lang="ts">
import { paths, required, email } from '@/constants'
import { AuthTitle, BaseButton, BaseInput, BaseLink } from '@/components'
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
    alert('Reset link sent to your email address.')
  } else {
    console.log(errors.value)
  }
}
</script>

<template>
  <AuthTitle
    title="Forgot password?"
    description="No problem. Enter the email tied to your account and we'll send you a reset link."
    :icon="emailIcon"
  />

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
</template>
