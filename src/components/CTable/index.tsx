import { CommonDataType } from '@/types/app'
import { Pagination, Table } from 'antd'
import type { TableProps } from 'antd'

interface CommonTableProps<T extends CommonDataType> {
  tableData: T[]
  tableColumns: TableProps<T>['columns']
  children?: React.ReactNode
  rowKey: string
  scroll?: TableProps<T>['scroll']
  total?: number
  pageSizeOptions?: number[]
  onChange?: (page: number, pageSize: number) => void
}
export default function CommonTable<T extends CommonDataType>(
  props: CommonTableProps<T>,
) {
  const {
    tableData,
    tableColumns,
    children,
    rowKey,
    scroll,
    total,
    pageSizeOptions,
    onChange,
  } = props
  type DataType = typeof tableData
  type SingleDatatype = DataType[number]
  return (
    <div>
      <div className="table-button-group mb-2 mt-2">{children}</div>
      <Table<SingleDatatype>
        size="middle"
        rowKey={rowKey}
        columns={tableColumns}
        dataSource={tableData}
        pagination={false}
        bordered
        scroll={scroll}
      />
      <div className="mt-4 text-right w-full flex items-center justify-end">
        <Pagination
          total={total}
          showSizeChanger
          pageSizeOptions={pageSizeOptions}
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
