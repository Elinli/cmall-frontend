import { useAppStore } from '@/store'
import { Navigate } from 'react-router-dom'
type PermissionProps = {
  children: React.ReactNode
}
export default function Permission({ children }: PermissionProps) {
  const token = useAppStore((state) => state.token)
  if (token) {
    return <div>{children}</div>
  }
  return <Navigate to={'/home'} />
}
