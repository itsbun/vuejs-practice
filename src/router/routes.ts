import { paths } from '@/constants'
import { AuthLayout } from '@/layouts'
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
    meta: { layout: AuthLayout },
  },
  {
    path: paths.register,
    component: RegisterView,
    meta: { layout: AuthLayout },
  },
  {
    path: paths.forgotPassword,
    component: ForgotPasswordView,
    meta: { layout: AuthLayout },
  },
  {
    path: paths.resetPassword,
    component: ResetPasswordView,
    meta: { layout: AuthLayout },
  },
  {
    path: paths.verifyEmail,
    component: VeriyEmailView,
    meta: { layout: AuthLayout },
  },
  {
    path: paths.success,
    component: SuccessView,
    meta: { layout: AuthLayout },
  },
]
