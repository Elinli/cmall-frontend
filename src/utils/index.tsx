import { LazyLoad } from '@/components/LazyLoad'
import { ChatRouter } from '@/router'
import { MenuResponse } from '@/types/api/system'
import * as Icons from '@ant-design/icons'
export type IconName = keyof typeof Icons
export type IconProps = {
  icon: IconName
}
export const allIcons = Object.keys(Icons)

export function generateRoutes(routes: MenuResponse[]): ChatRouter[] {
  return routes.map((item: MenuResponse) => {
    if (item.children) {
      return {
        ...item,
        children: item.children.map((item: MenuResponse) => {
          return {
            ...item,
            element: LazyLoad(item.path),
          }
        }),
      }
    }
    return {
      ...item,
      element: LazyLoad(item.path),
    }
  }) as unknown as ChatRouter[]
}

export default { Icons }
