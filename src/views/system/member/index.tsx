import {
  createMember,
  deleteMember,
  exportMemberExcelFile,
  fetchMemberList,
  updateMember,
} from '@/apis/members'
import CommonSearch from '@/components/CSearch'
import CommonTable from '@/components/CTable'
import IconFont from '@/components/IconFont'
import {
  CreateMemberRequest,
  MemberRequest,
  MemberResponse,
  UpdateMemberRequest,
} from '@/types/api/member'
import {
  CommonDataType,
  CommonSearchType,
  ErrorType,
  InputType,
  Pagination,
} from '@/types/app'
import { downloadFile, formatParamsEmptyStrToNull } from '@/utils'
import {
  Button,
  Col,
  Divider,
  Form,
  FormInstance,
  Input,
  message,
  Row,
  Select,
  Spin,
  type TableProps,
} from 'antd'
import { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import CModal from '@/components/CModal'
import CForm from '@/components/CForm'

interface DataType extends CommonDataType {
  name: string
  email: string
  phone: string
  roles: number[]
}
const { Option } = Select

enum Title {
  create = '新增用户',
  update = '编辑用户',
  delete = '删除用户',
}

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
    label: '密码',
  },
  {
    type: InputType.Input,
    placeholder: '请输入邮箱',
    field: 'email',
    label: '邮箱',
  },
  {
    type: InputType.Input,
    placeholder: '请输入手机号',
    field: 'phone',
    label: '手机号',
  },
  {
    type: InputType.Input,
    placeholder: '请输入角色',
    field: 'role',
    label: '角色',
    options: [
      { label: '管理员', value: 1 },
      { label: '普通用户', value: 2 },
    ],
  },
]
type GenerateReturnType = {
  [K in CommonSearchType['field']]: unknown
}

export default function Member() {
  const [initialValues, setInitialValues] = useState<Record<string, unknown>>(
    {},
  )
  const [searchTime, setSearchTime] = useState<string>('')
  const [tableData, setTableData] = useState<MemberResponse[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentType, setCurrentType] = useState<string>('create')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<Title>(Title.create)
  const modalFormRef = useRef<FormInstance>(null)
  const [total, setTotal] = useState(0)

  const [searchParams, setSearchParams] = useState<
    Partial<GenerateReturnType & Pagination>
  >({
    pageNum: 1,
    pageSize: 10,
  })

  const handleCancel = () => {
    setIsModalOpen(false)
    setInitialValues({})
  }
  const handleCreateMember = () => {
    setModalTitle(Title.create)
    setCurrentType('create')
    setIsModalOpen(true)
  }
  const handleClickItem = (record: DataType, type: keyof typeof Title) => {
    setInitialValues(record)
    setModalTitle(Title[type])
    setIsModalOpen(true)
    setCurrentType(type)
  }
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'username',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: 'left',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: 'left',
    },
    {
      title: 'Create Time',
      dataIndex: 'createTime',
      align: 'left',
      render: (text) => <a>{dayjs(text).format('YYYY-MM-DD')}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'left',
    },
    {
      title: 'Department',
      dataIndex: 'deptId',
      align: 'left',
    },

    {
      title: 'Roles',
      dataIndex: 'roles',
      render: (_, record: DataType) => (
        <>
          <div className="flex gap-1">
            {record.roles.map((i: number, idx) => (
              <a key={idx} className="bg-blue-200 rounded pl-2 pr-2">
                {i}
              </a>
            ))}
          </div>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (_, record: DataType) => (
        <>
          <a
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => handleClickItem(record, 'update')}
          >
            编辑
          </a>
          <a
            className="text-red-500 ml-2 hover:text-red-600 cursor-pointer"
            onClick={() => handleClickItem(record, 'delete')}
          >
            删除
          </a>
        </>
      ),
    },
  ]
  const renderChild = () => {
    if (['update', 'create'].includes(currentType)) {
      return (
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ required: true, message: '邮箱为必填项' }]}
            >
              <Input placeholder="请输入" disabled={currentType === 'update'} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="名称"
              name="username"
              rules={[{ required: true, message: '名称为必填项' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="部门"
              name="deptId"
              rules={[{ required: true, message: '部门为必选项' }]}
            >
              <Select style={{ width: '100%' }} placeholder="请选择" allowClear>
                <Option value={1}>开发部</Option>
                <Option value={2}>监理部</Option>
                <Option value={3}>人事部</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="角色"
              name="roles"
              rules={[{ required: true, message: '角色为必选项' }]}
            >
              <Select placeholder="请选择" allowClear mode="multiple">
                <Option value={1}>Normal</Option>
                <Option value={2}>Team Leader</Option>
                <Option value={3}>Manager</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="电话"
              name="phone"
              rules={[{ required: true, message: '电话为必填项' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="头像"
              name="avatar"
              rules={[{ required: true, message: '头像为必选项' }]}
            >
              <Select placeholder="请选择">
                <Option value="color">彩色</Option>
                <Option value="normal">正常</Option>
                <Option value="default">默认</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      )
    } else {
      return <div>是否确认删除此数据？</div>
    }
  }
  const handleOk = () => {
    modalFormRef.current?.submit()
  }
  useEffect(() => {
    setLoading(true)
    const params = formatParamsEmptyStrToNull({
      ...searchParams,
      pageNum: searchParams.pageNum || 1,
      pageSize: searchParams.pageSize || 10,
    })
    fetchMemberList(
      params as Partial<Pick<MemberRequest, 'email' | 'username' | 'status'>> &
        Pagination,
    )
      .then((res) => {
        setTableData(res.body)
        setTotal(res.total)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchParams, searchTime])
  const handleSearch = (searchParams: GenerateReturnType) => {
    setSearchTime(Date.now().toString())
    setSearchParams(searchParams)
  }
  const handleReset = () => {
    setSearchParams({
      pageNum: 1,
      pageSize: 10,
    })
  }
  const handleFinish = async (values: Record<string, unknown>) => {
    setLoading(true)

    if (currentType === 'delete') {
      try {
        await deleteMember(initialValues.id as string)
        message.success('删除成功')
      } catch (error: unknown) {
        setLoading(false)
        message.error((error as ErrorType)?.message || '删除失败')
      }
    } else if (currentType === 'create') {
      try {
        const params = {
          ...formatParamsEmptyStrToNull(values),
          status: 'active',
          password: '123456',
        }
        await createMember(params as CreateMemberRequest)
      } catch (error: unknown) {
        setLoading(false)
        message.error((error as ErrorType)?.message || '新增失败')
      }
    } else {
      try {
        const params = {
          ...formatParamsEmptyStrToNull(values),
          id: initialValues.id,
          status: 'active',
        }
        await updateMember(params as UpdateMemberRequest)
      } catch (error: unknown) {
        setLoading(false)
        message.error((error as ErrorType)?.message || '编辑失败')
      }
    }
    handleSearch(searchParams)
    setLoading(false)
    setIsModalOpen(false)
  }
  const onPaginationChange = (page: number, pageSize: number) => {
    setSearchParams({
      ...searchParams,
      pageNum: page,
      pageSize: pageSize,
    })
  }
  const handleExportMember = () => {
    exportMemberExcelFile()
      .then((res) => {
        downloadFile(res, 'member.xlsx')
        message.success('导出成功')
      })
      .catch(() => {
        message.error('导出失败')
      })
  }
  return (
    <div className="comman-table">
      <Spin spinning={loading}>
        <CommonSearch
          searchCondition={searchCondition}
          onSearch={handleSearch}
          onReset={handleReset}
        ></CommonSearch>
        <Divider className="mt-2 mb-4" />
        <CommonTable<DataType>
          rowKey="id"
          tableColumns={columns}
          tableData={tableData as unknown as DataType[]}
          scroll={{ x: 'max-content' }}
          total={total}
          onChange={onPaginationChange}
        >
          <div className="w-full flex justify-between">
            <div>
              <Button>导入用户</Button>
              <Button
                type="primary"
                className="ml-2"
                onClick={handleExportMember}
              >
                导出用户
              </Button>
            </div>
            <Button type="primary" onClick={handleCreateMember}>
              <IconFont icon={'PlusOutlined'}></IconFont> 新增用户
            </Button>
          </div>
        </CommonTable>
      </Spin>
      <CModal
        open={isModalOpen}
        width={currentType === 'delete' ? 300 : 800}
        onCancel={handleCancel}
        onOk={handleOk}
        title={modalTitle}
        okText={'提交'}
        cancelText={'取消'}
      >
        <CForm
          ref={modalFormRef}
          initialValues={initialValues}
          handleFinish={handleFinish}
        >
          {renderChild()}
        </CForm>
      </CModal>
    </div>
  )
}
