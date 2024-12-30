// src/types/chat.ts

import { IconName } from '@/utils'

enum MenuType {
  Button,
  Link,
  Menu,
}

export interface MenuResponse {
  id: string | undefined
  order: number | string
  title: string | null
  type: MenuType | string
  createdAt: string
  parentId: number | string | null
  path: string
  children?: MenuResponse[]
  icon?: IconName | null
}
