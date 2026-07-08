import { paths } from './paths'

export const authNavigationItems = [
  { href: paths.login, order: 1, label: 'Login' },
  { href: paths.register, order: 2, label: 'Register' },
  { href: paths.forgot_password, order: 3, label: 'Forgot Password' },
  { href: paths.reset_password, order: 4, label: 'Reset Password' },
  { href: paths.verify_email, order: 5, label: 'Verify Email' },
  { href: paths.success, order: 6, label: 'Success' },
]
