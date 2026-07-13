import { authRoutes } from '@/modules/auth'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [...authRoutes]
