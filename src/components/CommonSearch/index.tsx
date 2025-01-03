import { CommonSearchType, InputType } from '@/types/app'
import { Button, Col, Input, Row } from 'antd'
import { useState } from 'react'

interface CommonSearchProps {
  searchCondition: CommonSearchType[]
  children?: React.ReactNode
  onSearch?: (arg0: GenerateReturnType) => void
}
type GenerateReturnType = {
  [K in CommonSearchType['field']]: string
}

const style: React.CSSProperties = { background: '#fff', padding: '2px 0' }
export default function CommonSearch({
  searchCondition,
  children,
  onSearch,
}: CommonSearchProps) {
  const [formData, setFormData] = useState<GenerateReturnType>({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const onClickSearch = () => {
    if (onSearch) onSearch(formData)
  }
  const els = searchCondition.map((item) => {
    if (item.type === InputType.Input) {
      return (
        <Input
          key={item.field}
          name={item.field}
          placeholder={item.placeholder}
          value={formData[item.field]}
          onChange={handleChange}
        />
      )
    }
  })

  return (
    <div>
      {children ? children : els}
      <Row gutter={16}>
        {els.map((i, idx) => (
          <Col className="gutter-row" span={6} key={idx}>
            <div style={style}>{i}</div>
          </Col>
        ))}
        <Col className="gutter-row" span={6} offset={18}>
          <Button onClick={onClickSearch}>查询</Button>
        </Col>
      </Row>
    </div>
  )
}
