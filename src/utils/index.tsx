/* eslint-disable @typescript-eslint/no-explicit-any */

import * as Icons from '@ant-design/icons'
export type IconName = keyof typeof Icons
export type IconProps = {
  icon: IconName
  [key: string]: any
}
export const allIcons = Object.keys(Icons)
export default { Icons }
