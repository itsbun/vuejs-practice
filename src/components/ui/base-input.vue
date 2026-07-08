<script setup lang="ts">
interface InputComponentProps {
  type?: 'text' | 'password' | 'email'
  label?: string
  value?: string
  placeholder?: string
}

const props = withDefaults(defineProps<InputComponentProps>(), {
  type: 'text',
  label: '',
  value: '',
  placeholder: '',
})
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label
      class="text-sm/5 font-semibold tracking-normal text-black"
      v-if="props.label"
      :for="props.label"
      >{{ props.label }}</label
    >

    <input
      class="border-border focus:ring-primary rounded-xl border px-3.5 py-2.5 outline-none focus:ring-1"
      :id="props.label"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.value"
      autocomplete="on"
    />
  </div>
</template>
