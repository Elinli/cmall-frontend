// src/views/login/SignUp.tsx
import type { FormProps } from 'antd'
import {
  LockOutlined,
  UserOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { Props } from './'
import { useNavigate } from 'react-router-dom'
import { register } from '@/apis/user'

type FieldType = {
  email: string
  password: string
  fullname: string
}

export default function SignUp({ funcParent }: Props) {
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await register(values)
      localStorage.setItem('token', response.token)
      navigate('/home', { state: values })
      message.success('注册成功！')
    } catch {
      message.error('注册失败，请检查输入信息。')
    }
  }

  const handleClickSignIn = () => {
    funcParent('in')
  }

  return (
    <Form
      name="register"
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
        name="fullname"
        rules={[{ required: true, message: 'Please input your Fullname!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Fullname" />
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
        <Button block type="primary" htmlType="submit">
          Sign Up
        </Button>
        or
        <Button type="link" onClick={handleClickSignIn}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  )
}
