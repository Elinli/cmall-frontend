import { fetchMemberList } from '@/apis/members'
import CommonSearch from '@/components/CommonSearch'
import CommonTable from '@/components/CommonTable'
import IconFont from '@/components/IconFont'
import { MemberResponse } from '@/types/api/member'
import { CommonDataType, CommonSearchType, InputType } from '@/types/app'
import { Button, Spin, type TableProps } from 'antd'
import { useEffect, useState } from 'react'

interface DataType extends CommonDataType {
  name: string
  money: string
  address: string
  roles: number[]
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    dataIndex: 'createdAt',
    align: 'left',
  },
  {
    title: 'Address',
    dataIndex: 'roles',
    render: (_, record: DataType) => (
      <>
        {record.roles.map((i: number, idx) => (
          <div key={idx}>
            <a>{i}</a>
          </div>
        ))}
      </>
    ),
  },
]

const searchCondition: CommonSearchType[] = [
  {
    type: InputType.Input,
    placeholder: '请输入用户名',
    field: 'username',
    label: '用户名',
  },
  {
    type: InputType.Input,
    placeholder: '请输入密码',
    field: 'password',
    label: '用户名',
  },
  {
    type: InputType.Input,
    placeholder: '请输入邮箱',
    field: 'email',
    label: '用户名',
  },
  {
    type: InputType.Input,
    placeholder: '请输入手机号',
    field: 'phone',
    label: '用户名',
  },
]
type GenerateReturnType = {
  [K in CommonSearchType['field']]: string
}
export default function Member() {
  const [searchParams, setSearchParams] = useState<GenerateReturnType>({})
  const [data, setData] = useState<MemberResponse[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchMemberList(searchParams)
  }, [searchParams])
  const handleSearch = (searchParams: GenerateReturnType) => {
    setSearchParams(searchParams)
    setLoading(true)
    fetchMemberList(searchParams)
      .then((res) => {
        setData(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <div className="comman-table">
      <Spin spinning={loading}>
        <CommonSearch
          searchCondition={searchCondition}
          onSearch={handleSearch}
        ></CommonSearch>
        <CommonTable<DataType>
          tableColumns={columns}
          tableData={data as unknown as DataType[]}
        >
          <div className="w-full flex justify-between">
            <Button>导出用户列表</Button>
            <Button type="primary">
              <IconFont icon={'PlusOutlined'}></IconFont> 新增用户
            </Button>
          </div>
        </CommonTable>
      </Spin>
    </div>
  )
}
