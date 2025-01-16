import React, { useMemo, useRef, useState } from 'react'
import {
  Button,
  Col,
  Divider,
  Empty,
  Flex,
  Form,
  FormInstance,
  Input,
  message,
  Row,
  Tree,
} from 'antd'
import { useAppStore } from '@/store'
import IconFont from '@/components/IconFont'
import { MenuType } from '@/types/api/system'
import CForm from '@/components/CForm'

const generateTreeData = (data: MenuType[], parentId = 'root'): MenuType[] =>
  data.map((item) => {
    item.key = item.id
    item.parentId = parentId
    if (item.children) {
      item.children = generateTreeData(item.children, item.id)
    }
    return item
  })

export default function Menu() {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const [currentMenu, setCurrentMenu] = useState<MenuType | undefined>()
  const [currentType, setCurrentType] = useState<string>('create')
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const allRoutes = useAppStore((state) => state.allRoutes)
  const originTreeData = generateTreeData(allRoutes)
  const modalFormRef = useRef<FormInstance>(null)

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  const treeData = useMemo(() => {
    const loop = (data: MenuType[]): MenuType[] =>
      data.map((item) => {
        if (item.children) {
          return {
            ...item,
            children: loop(item.children),
          }
        }
        return { ...item }
      })

    return loop(originTreeData as MenuType[])
  }, [originTreeData])
  const renderTitle = (node: MenuType) => {
    return (
      <div className="flex items-center mt-0.5">
        {node.icon && <IconFont icon={node.icon}></IconFont>}
        <span className="ml-2">{node.title}</span>
      </div>
    )
  }
  const handleSelect = (
    _selectedKeys: React.Key[],
    info: {
      node: React.SetStateAction<MenuType | undefined>
      selected: boolean
    },
  ) => {
    if (!info.node) return
    if (info.selected) {
      setCurrentMenu(info.node)
    } else {
      setCurrentMenu(undefined)
    }
  }
  const handleCommand = (type: string) => {
    setCurrentType(type)
    if (type === 'delete' || type === 'update') {
      if (!currentMenu) {
        message.error('请选择要操作的菜单')
        return
      }
    }
  }
  const handleFinish = async (values: Record<string, unknown>) => {
    // setLoading(true)
    // let requestParams
    // if (currentType === 'delete') {
    //   requestParams = initialValues.id
    // } else if (currentType === 'create') {
    //   requestParams = {
    //     ...formatParamsEmptyStrToNull(values),
    //     status: 'enable',
    //   }
    // } else {
    //   requestParams = {
    //     ...formatParamsEmptyStrToNull(values),
    //     id: initialValues.id,
    //     status: 'enable',
    //   }
    // }
    // try {
    //   await funcMapping(currentType, requestParams)
    //   message.success('操作成功')
    //   handleSearch(searchParams)
    //   setIsModalOpen(false)
    // } catch (error: unknown) {
    //   setLoading(false)
    //   message.error((error as ErrorType)?.message || '操作失败')
    // }
    return values
  }
  return (
    <div className="flex flex-row">
      <div className="w-64">
        <Flex vertical gap="small">
          <Flex gap="small" wrap>
            <Button
              color="primary"
              variant="solid"
              onClick={() => handleCommand('create')}
            >
              新增
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => handleCommand('update')}
              disabled={!currentMenu}
            >
              编辑
            </Button>
            <Button
              color="danger"
              variant="dashed"
              onClick={() => handleCommand('delete')}
              disabled={!currentMenu}
            >
              删除
            </Button>
          </Flex>
        </Flex>
        <Divider />
        <Tree
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          treeData={treeData}
          blockNode
          titleRender={renderTitle}
          onSelect={handleSelect}
        />
      </div>
      <div className="operate-box flex-grow border rounded-sm ml-4 p-4 h-full">
        <div className="w-full">
          <div className="text-xl">菜单信息</div>
          {currentMenu ? (
            <>
              <Divider></Divider>
              <CForm
                ref={modalFormRef}
                maxWidth={868}
                initialValues={currentMenu}
                handleFinish={handleFinish}
                formValues={currentMenu as unknown as Record<string, unknown>}
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="菜单名称"
                      name="title"
                      rules={[{ required: true, message: '菜单名称为必填项' }]}
                    >
                      <Input placeholder="请输入" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="路径"
                      name="path"
                      rules={[{ required: false, message: '路径为必填项' }]}
                    >
                      <Input placeholder="请输入" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="父级菜单"
                      name="parentId"
                      rules={[{ required: false, message: '父级菜单为必选项' }]}
                    >
                      <Input placeholder="请输入" />
                    </Form.Item>
                  </Col>
                </Row>
              </CForm>
              {(currentType === 'update' || currentType === 'create') && (
                <div className="w-full pl-16">
                  <Button type="primary" className="mr-4">
                    保存
                  </Button>
                  <Button>取消</Button>
                </div>
              )}
            </>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  )
}
