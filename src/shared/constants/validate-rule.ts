export type ValidationRule = (value: unknown) => true | string

export const required = (fieldName: string): ValidationRule => {
  return (value) =>
    (value !== undefined && value !== null && value !== '') || `${fieldName} cannot be empty.`
}

export const minLength = (min: number, fieldName: string): ValidationRule => {
  return (value) => {
    const text = String(value ?? '')
    return text.length >= min || `${fieldName} must have at least ${min} characters.`
  }
}

export const email = (): ValidationRule => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return (value) => {
    const text = String(value ?? '')
    return !text || pattern.test(text) || 'The email is not in the correct format.'
  }
}

export const password = (): ValidationRule => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/

  return (value) => {
    const text = String(value ?? '')
    return !text || pattern.test(text) || 'The password is not in the correct format.'
  }
}

export const match = (getExpectedValue: () => unknown, fieldName: string): ValidationRule => {
  return (value) => {
    return value === getExpectedValue() || `${fieldName} does not match.`
  }
}
