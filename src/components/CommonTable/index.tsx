import { CommonDataType } from '@/types/app'
import { Table } from 'antd'
import type { TableProps } from 'antd'

interface CommonTableProps<T extends CommonDataType> {
  tableData: T[]
  tableColumns: TableProps<T>['columns']
  children?: React.ReactNode
  rowKey: string
}
export default function CommonTable<T extends CommonDataType>({
  tableData,
  tableColumns,
  children,
  rowKey,
}: CommonTableProps<T>) {
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
        bordered
      />
    </div>
  )
}
