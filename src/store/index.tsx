import { fetchMenuList } from '@/apis/app'
import { MenuResponse } from '@/types/api/system'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
  token: string | null
  appId: string | number | null
  selectedKey: string[]
  breadcrumbs: string[]
  menus: MenuResponse[]
}

type Actions = {
  setToken: (token: string) => void
  setAppId: (appId: string | number) => void
  setSelectedKey: (key: string[]) => void
  setBreadcrumbs: (breadcrumbs: string[]) => void
  setMenus: () => void
}

export const useAppStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      token: null,
      appId: null,
      selectedKey: [],
      breadcrumbs: [],
      menus: [],
      setToken: (token: string) =>
        set((state) => {
          state.token = token
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
      setMenus: async () => {
        const menus = await fetchMenuList()
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
