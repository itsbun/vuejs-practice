import { paths } from '@/constants'
import { LoginView, RegisterView } from '@/views'
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
]
