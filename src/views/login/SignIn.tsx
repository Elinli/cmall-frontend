// src/views/login/SignUp.tsx
import type { FormProps } from 'antd'
import { LockOutlined, CloudUploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Flex, Checkbox } from 'antd'
import { LoginProps } from './'
import { useNavigate } from 'react-router-dom'
import { login } from '@/apis/user'
import { useAppStore } from '@/store'
import { User } from '@/types/api/user'
type FieldType = {
  email: string
  password: string
  username: string
}

export default function SignUp({ funcParent }: LoginProps) {
  const navigate = useNavigate()
  const setToken = useAppStore((state) => state.setToken)
  const setUser = useAppStore((state) => state.setUser)
  const setMenus = useAppStore((state) => state.setMenus)
  const setAllRoutes = useAppStore((state) => state.setAllRoutes)
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const params = {
        email: values.email,
        password: values.password,
      }
      const response = await login(params)
      localStorage.setItem('token', response.token)
      setToken(response.token)
      setUser(response.user as User)
      await setMenus(response.user as User)
      await setAllRoutes(response.user as User)
      navigate('/dashboard')
      message.success('sign in success!')
    } catch (err) {
      message.error('sign in failed!')
      return err
    }
  }

  const handleClickSignUp = () => {
    funcParent('in')
  }

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
        email: 'elixy@qq.com',
        password: '123456',
      }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<CloudUploadOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button type="link">Forgot password</Button>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Sign In
        </Button>
        or
        <Button color="default" variant="link" onClick={handleClickSignUp}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  )
}
