/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Icons from '@ant-design/icons'
type IconName = keyof typeof Icons
type IconProps = {
  icon: IconName | null | undefined
}
export default function IconFont({ icon, ...props }: IconProps) {
  if (!icon) return null
  const IconComponent: any = Icons[icon]
  return <IconComponent {...props} />
}
