<script setup lang="ts">
interface InputComponentProps {
  type?: 'text' | 'password' | 'email'
  label?: string
  placeholder?: string
  error?: string
}

const props = withDefaults(defineProps<InputComponentProps>(), {
  type: 'text',
  label: '',
  placeholder: '',
  error: '',
})

const model = defineModel<string>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label
      v-if="props.label"
      :for="props.label"
      class="text-sm/5 font-semibold tracking-normal text-black"
      >{{ props.label }}</label
    >

    <input
      :id="props.label"
      v-model="model"
      :class="[
        'border-border focus:ring-primary rounded-xl border px-3.5 py-2.5 outline-none focus:ring-1',
        props.error ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary',
      ]"
      :type="props.type"
      :placeholder="props.placeholder"
      autocomplete="on"
    />

    <p v-if="props.error" class="text-xs text-red-500 italic">
      {{ props.error }}
    </p>
  </div>
</template>
