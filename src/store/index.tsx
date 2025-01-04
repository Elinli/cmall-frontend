import { fetchMenuList } from '@/apis/app'
import { MenuResponse } from '@/types/api/system'
import { User } from '@/types/api/user'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
  token: string | null
  userInfo: User | null
  appId: string | number | null
  selectedKey: string[]
  breadcrumbs: string[]
  menus: MenuResponse[]
}

type Actions = {
  setToken: (token: string) => void
  setUser: (user: User) => void
  setAppId: (appId: string | number) => void
  setSelectedKey: (key: string[]) => void
  setBreadcrumbs: (breadcrumbs: string[]) => void
  setMenus: (userInfo: User) => void
}

export const useAppStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      token: null,
      userInfo: null,
      appId: null,
      selectedKey: [],
      breadcrumbs: [],
      menus: [],
      setToken: (token: string) =>
        set((state) => {
          state.token = token
        }),
      setUser: (userInfo: User) =>
        set((state) => {
          state.userInfo = userInfo
        }),
      setAppId: (appId: string | number) =>
        set((state) => {
          state.appId = appId
        }),

      setSelectedKey: (key: string[]) =>
        set((state) => {
          state.selectedKey = key
        }),
      setBreadcrumbs: (breadcrumbs: string[]) =>
        set((state) => {
          state.breadcrumbs = breadcrumbs
        }),
      setMenus: async (userInfo: User) => {
        const menus = await fetchMenuList({ id: userInfo.id })
        set((state) => {
          state.menus = menus
        })
      },
    })),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
