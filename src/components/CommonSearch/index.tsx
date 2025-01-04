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
  const offset = () => {
    if (els.length % 4 === 0) {
      return 18
    } else if (els.length % 4 === 1) {
      return 12
    } else if (els.length % 4 === 2) {
      return 6
    } else {
      return 0
    }
  }
  return (
    <div>
      <Row gutter={16}>
        {els.map((i, idx) => (
          <Col className="gutter-row mb-2" span={6} key={idx}>
            <div style={style}>{i}</div>
          </Col>
        ))}
        <Col className="gutter-row text-right" span={6} offset={offset()}>
          <Button onClick={onClickSearch} className="mr-3">
            重置
          </Button>
          <Button type="primary" onClick={onClickSearch}>
            查询
          </Button>
        </Col>
      </Row>
    </div>
  )
}
