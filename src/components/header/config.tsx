import { ReactNode } from 'react'

interface NavTab {
  name: string
  type: NavType
  path?: string
  children?: ReactNode
  width?: number
  className?: string
}
export enum NavType {
  NAV,
  SELECT,
}
export type NavTabs = NavTab[]
