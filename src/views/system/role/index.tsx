import { fetchRoleList } from '@/apis/role'
import CommonSearch from '@/components/CSearch'
import CommonTable from '@/components/CTable'
import IconFont from '@/components/IconFont'
import { RoleRequest, RoleResponse } from '@/types/api/role'
import {
  CommonDataType,
  CommonSearchType,
  ErrorType,
  InputType,
  Pagination,
} from '@/types/app'
import { formatParamsEmptyStrToNull } from '@/utils'
import {
  Button,
  Col,
  Divider,
  Form,
  FormInstance,
  Input,
  message,
  Row,
  Spin,
  type TableProps,
} from 'antd'
import { useEffect, useRef, useState } from 'react'
import CModal from '@/components/CModal'
import CForm from '@/components/CForm'
import { funcMapping } from './funcCollection'

interface DataType extends CommonDataType {
  name: string
  email: string
  phone: string
  roles: number[]
}

enum Title {
  create = '新增角色',
  update = '编辑角色',
  delete = '删除角色',
  permission = '权限设置',
}

const searchCondition: CommonSearchType[] = [
  {
    type: InputType.Input,
    placeholder: '请输入角色编码',
    field: 'code',
    label: '角色名',
  },
  {
    type: InputType.Input,
    placeholder: '请输入状态',
    field: 'status',
    label: '状态',
  },
]
type GenerateReturnType = {
  [K in CommonSearchType['field']]: unknown
}

export default function Role() {
  const [initialValues, setInitialValues] = useState<Record<string, unknown>>(
    {},
  )
  const [searchTime, setSearchTime] = useState<string>('')
  const [tableData, setTableData] = useState<RoleResponse[]>([])
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
  const handleCreateRole = () => {
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
      title: 'Code',
      dataIndex: 'code',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'left',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'left',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      align: 'left',
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 160,
      render: (_, record: DataType) => (
        <>
          <a
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => handleClickItem(record, 'update')}
          >
            编辑
          </a>
          <a
            className="text-blue-500 hover:text-blue-700 cursor-pointer ml-2"
            onClick={() => handleClickItem(record, 'permission')}
          >
            权限设置
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
              label="编码"
              name="code"
              rules={[{ required: true, message: '编码为必填项' }]}
            >
              <Input placeholder="请输入" disabled={currentType === 'update'} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="名称"
              name="name"
              rules={[{ required: true, message: '名称为必填项' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="描述"
              name="description"
              rules={[{ required: false, message: '部门为必选项' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>
      )
    } else if (currentType === 'delete') {
      return <div>是否确认删除此数据？</div>
    } else if (currentType === 'permission') {
      return <div>树形数据</div>
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
    fetchRoleList(
      params as Partial<Pick<RoleRequest, 'code' | 'status'>> & Pagination,
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
    let requestParams

    if (currentType === 'delete') {
      requestParams = initialValues.id
    } else if (currentType === 'create') {
      requestParams = {
        ...formatParamsEmptyStrToNull(values),
        status: 'enable',
      }
    } else {
      requestParams = {
        ...formatParamsEmptyStrToNull(values),
        id: initialValues.id,
        status: 'enable',
      }
    }
    try {
      await funcMapping(currentType, requestParams)
      message.success('操作成功')
      handleSearch(searchParams)
      setIsModalOpen(false)
    } catch (error: unknown) {
      setLoading(false)
      message.error((error as ErrorType)?.message || '操作失败')
    }
  }
  const onPaginationChange = (page: number, pageSize: number) => {
    setSearchParams({
      ...searchParams,
      pageNum: page,
      pageSize: pageSize,
    })
  }

  return (
    <div className="member-page">
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
            <Button type="primary" onClick={handleCreateRole}>
              <IconFont icon={'PlusOutlined'}></IconFont> 新增角色
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
