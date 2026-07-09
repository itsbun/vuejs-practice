<script setup lang="ts">
import { ref, watch } from 'vue'

interface OtpInputProps {
  countOfNumbers?: number
  id: string
}
const props = withDefaults(defineProps<OtpInputProps>(), {
  countOfNumbers: 6,
  id: 'otp-input',
})

const inputRefs = ref<HTMLInputElement[]>([])

const setInputRef = (el: HTMLInputElement, index: number) => {
  if (el) {
    inputRefs.value[index] = el
  }
}

const otp = ref<string[]>(Array.from({ length: props.countOfNumbers }, () => ''))

const modelValue = defineModel<string>({ default: '' })

watch(modelValue, (newValue) => {
  otp.value = Array.from({ length: props.countOfNumbers }, (_, index) => newValue[index] || '')
})

const focusInput = (index: number) => {
  if (index < 0 || index >= props.countOfNumbers) return

  inputRefs.value[index]?.focus()
  inputRefs.value[index]?.select()
}

const updateValue = () => {
  const value = otp.value.join('')
  modelValue.value = value
}

const onInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement
  const value = input.value.replace(/\D/g, '').slice(-1)

  otp.value[index] = value
  input.value = value

  updateValue()

  if (value && index < props.countOfNumbers - 1) {
    focusInput(index + 1)
  }
}

const onKeyDown = (event: KeyboardEvent, index: number) => {
  switch (event.key) {
    case 'Backspace':
      event.preventDefault()

      if (otp.value[index]) {
        otp.value[index] = ''
        updateValue()
      } else if (index > 0) {
        otp.value[index - 1] = ''
        updateValue()
        focusInput(index - 1)
      }
      break

    case 'ArrowLeft':
      event.preventDefault()
      focusInput(index - 1)
      break

    case 'ArrowRight':
      event.preventDefault()
      focusInput(index + 1)
      break
  }
}
</script>

<template>
  <div v-if="countOfNumbers > 0" class="flex justify-between gap-2">
    <input
      :id="`${props.id}-${index}`"
      v-for="(_, index) in otp"
      :key="index"
      :ref="(el) => setInputRef(el as HTMLInputElement, index)"
      :value="otp[index]"
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      maxlength="1"
      class="focus:border-primary h-9 w-9 gap-1 rounded-lg border border-gray-300 text-center text-xs outline-none sm:h-12 sm:w-12 sm:gap-2 sm:text-lg"
      @input="onInput($event, index)"
      @keydown="onKeyDown($event, index)"
    />
  </div>
</template>
