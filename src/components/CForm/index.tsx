import { Form, FormItemProps, ColProps, FormProps, Row, Col, Input } from 'antd'
import { FormInstance, RuleObject } from 'antd/es/form'
import { forwardRef, LegacyRef, ReactNode } from 'react'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
}
export type FormData = Record<string, unknown>
// 表单规则
export type FormRule = RuleObject & {
  trigger?: 'blur' | 'change' | ['change', 'blur']
}

// 表单数据
export interface FormItem extends FormItemProps {
  name: string | string[] // 表单域字段
  label: string // 标签
  placeholder?: string // 占位符
  hidden?: boolean // 是否隐藏
  unit?: string // 单位，无法和extra一起显示
  rules?: FormRule[] // 规则
  labelWidth?: number // label宽度
  wrapperWidth?: number // 内容宽度
}

interface Props extends FormProps {
  formItems?: FormItem[]
  className?: string
  children?: ReactNode
  maxWidth?: number
  labelCol?: Partial<ColProps>
  wrapperCol?: Partial<ColProps>
  handleFinish: FormProps['onFinish']
  formValues: FormData
}

const CForm = forwardRef((props: Props, ref: LegacyRef<FormInstance>) => {
  const [form] = Form.useForm()
  const {
    formItems,
    children,
    handleFinish,
    initialValues,
    maxWidth,
    formValues,
  } = props
  form.setFieldsValue(formValues)
  const onFinish: FormProps['onFinish'] = (values) => {
    if (handleFinish) {
      handleFinish?.(values)
    }
  }
  return (
    <Form
      {...formItemLayout}
      form={form}
      ref={ref}
      style={{ maxWidth: maxWidth || 720 }}
      initialValues={{ ...initialValues }}
      onFinish={onFinish}
    >
      <Row gutter={16}>
        {formItems?.map((item) => (
          <Col span={12}>
            <Form.Item label={item.label} name={item.name} rules={item.rules}>
              <Input />
            </Form.Item>
          </Col>
        ))}
      </Row>
      {children}
    </Form>
  )
})

export default CForm
