// src/types/chat.ts

import { IconName } from '@/utils'
import React from 'react'

enum MenuEnum {
  Button,
  Link,
  Menu,
}
export interface MenuType {
  id: string | undefined
  order: number | string
  title: string | null | React.ReactNode
  type: MenuEnum | string
  createdAt: string
  parentId: number | string | null
  path?: string
  children?: MenuType[]
  icon?: IconName
  user_id?: number
  key?: string | number
}
