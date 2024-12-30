/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from 'react'

const modules = import.meta.glob('@/views/**/index.tsx')
const components = Object.keys(modules).reduce(
  (pre: Record<string, () => Promise<any>>, cur) => {
    const url = cur.replace('/src/views', '').replace('/index.tsx', '')
    pre[url] = modules[cur]
    return pre
  },
  {},
)
// 动态加载组件
type UrlType = keyof typeof components
export function LazyLoad(url: UrlType) {
  if (!url) return null
  const Component = lazy(components[url])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}
