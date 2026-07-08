import { paths } from '@/constants'
import { ForgotPasswordView, LoginView, RegisterView, ResetPasswordView } from '@/views'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: paths.login,
    component: LoginView,
  },
  {
    path: paths.register,
    component: RegisterView,
  },
  {
    path: paths.forgot_password,
    component: ForgotPasswordView,
  },
  {
    path: paths.reset_password,
    component: ResetPasswordView,
  },
]
