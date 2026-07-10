import { paths } from '@/constants'
import {
  ForgotPasswordView,
  LoginView,
  RegisterView,
  ResetPasswordView,
  SuccessView,
  VeriyEmailView,
} from '@/views'
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
    path: paths.forgotPassword,
    component: ForgotPasswordView,
  },
  {
    path: paths.resetPassword,
    component: ResetPasswordView,
  },
  {
    path: paths.verifyEmail,
    component: VeriyEmailView,
  },
  {
    path: paths.success,
    component: SuccessView,
  },
]
