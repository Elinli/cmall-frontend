import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { useState } from 'react'
export type Props = {
  funcParent: (key: string) => void
}
export default function Login() {
  const [currentKey, setCurrentKey] = useState('in')

  const funcParent = (data: string) => {
    onChange(data)
  }
  const items: TabsProps['items'] = [
    {
      key: 'in',
      label: 'Sign In',
      children: <SignIn funcParent={funcParent} />,
    },
    {
      key: 'up',
      label: 'Sign Up',
      children: <SignUp funcParent={funcParent} />,
    },
  ]
  const title: string = 'Welcome To Chat Room'
  const onChange = (key: string) => {
    setCurrentKey(key)
  }

  return (
    <div className="login-page w-full h-full flex justify-between items-center  ">
      <div className="login-page-bg bg-blue-50 relative w-full h-full bg-hero-pattern">
        <div className="login-page-bg-img absolute top-36 right-52 bg-cover bg-center bg-no-repeat border w-96 h-96 bg-tr-50 p-4 rounded-md bg-redp ">
          <div>
            <div className="text-3xl text-gray-700">{title}</div>
            <Tabs items={items} onChange={onChange} activeKey={currentKey} />
          </div>
        </div>
      </div>
    </div>
  )
}
