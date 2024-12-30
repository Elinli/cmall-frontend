// src/views/login/SignUp.tsx
import type { FormProps } from 'antd'
import { LockOutlined, CloudUploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Flex, Checkbox } from 'antd'
import { LoginProps } from './'
import { useNavigate } from 'react-router-dom'
import { login } from '@/apis/user'
import { useAppStore } from '@/store'
type FieldType = {
  email: string
  password: string
  fullname: string
}

export default function SignUp({ funcParent }: LoginProps) {
  const navigate = useNavigate()
  const setToken = useAppStore((state) => state.setToken)
  const setMenus = useAppStore((state) => state.setMenus)
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const params = {
        email: values.email,
        password: values.password,
      }
      const response = await login(params)
      localStorage.setItem('token', response.token)
      setToken(response.token)
      // const menuData = await fetchMenuList()
      setMenus()
      navigate('/dashboard', { state: values })
      message.success('sign in success!')
    } catch (err) {
      message.error('sign in failed!')
      navigate('/dashboard', { state: values })
      return err
    }
  }

  const handleClickSignUp = () => {
    funcParent('in')
  }

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
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
