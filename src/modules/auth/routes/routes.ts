import type { RouteRecordRaw } from 'vue-router'
import { paths } from '@/shared/constants'
import {
  ForgotPasswordView,
  LoginView,
  RegisterView,
  ResetPasswordView,
  VerifyEmailView,
  SuccessView,
} from '../views'
import { AuthLayout } from '..'

export const authRoutes: RouteRecordRaw[] = [
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
    component: VerifyEmailView,
    meta: { layout: AuthLayout },
  },
  {
    path: paths.success,
    component: SuccessView,
    meta: { layout: AuthLayout },
  },
]
