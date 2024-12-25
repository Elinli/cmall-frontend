import type { FormProps } from 'antd'
import { LockOutlined, CloudUploadOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import { Props } from './'
import { useNavigate } from 'react-router-dom'
type FieldType = {
  email?: string
  password?: string
  remember?: string
}

export default function SignIn({ funcParent }: Props) {
  const handleClickSignUp = () => {
    funcParent('up')
  }
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    navigate('/home', { state: values })
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
