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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatParamsEmptyStrToNull(params: Record<string, any>) {
  for (const key in params) {
    if (params[key] === '') {
      params[key] = null
    }
  }
  return params
}

export function downloadFile(response: Blob, fileName: string) {
  const data = new Blob([response], { type: 'application/vnd.ms-excel' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(data)
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
}

export default { Icons }
