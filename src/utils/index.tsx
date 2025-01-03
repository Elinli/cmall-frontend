import * as Icons from '@ant-design/icons'
export type IconName = keyof typeof Icons
export type IconProps = {
  icon: IconName
}
export const allIcons = Object.keys(Icons)
export default { Icons }
