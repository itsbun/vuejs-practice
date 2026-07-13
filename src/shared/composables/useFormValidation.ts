import type { Ref } from 'vue'
import { nextTick, ref, watch } from 'vue'
import type { ValidationRule } from '@/shared/constants'

export const useFormValidation = <T extends Record<string, unknown>>(
  form: Ref<T>,
  rules: Record<keyof T, ValidationRule[]>,
) => {
  const errors = ref<Partial<Record<keyof T, string>>>({})

  const fields = Object.keys(rules) as (keyof T)[]

  const isResetting = ref(false)

  const validateField = (field: keyof T) => {
    for (const rule of rules[field]) {
      const result = rule(form.value[field])

      if (result !== true) {
        errors.value[field] = result
        return
      }
    }

    delete errors.value[field]
  }

  const validateAll = () => {
    fields.forEach(validateField)
    return Object.keys(errors.value).length === 0
  }

  const resetErrors = () => {
    isResetting.value = true
    errors.value = {}

    nextTick(() => {
      isResetting.value = false
    })
  }

  fields.forEach((field) => {
    watch(
      () => form.value[field],
      () => {
        return isResetting.value ? null : validateField(field)
      },
    )
  })

  return {
    errors,
    validateField,
    validateAll,
    resetErrors,
  }
}
