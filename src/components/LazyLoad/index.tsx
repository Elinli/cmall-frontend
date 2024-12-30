import { lazy, Suspense } from 'react'

// 动态加载组件
export function LazyLoad(url: string) {
  const Component = lazy(() => import(`/src/views${url}`))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}
