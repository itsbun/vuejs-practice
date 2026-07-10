import { paths } from './paths'

export const AUTH_NAVIGATION_ITEMS = [
  { href: paths.login, order: 1, label: 'Login' },
  { href: paths.register, order: 2, label: 'Register' },
  { href: paths.forgotPassword, order: 3, label: 'Forgot Password' },
  { href: paths.resetPassword, order: 4, label: 'Reset Password' },
  { href: paths.verifyEmail, order: 5, label: 'Verify Email' },
  { href: paths.success, order: 6, label: 'Success' },
]
