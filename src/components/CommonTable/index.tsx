import { CommonDataType } from '@/types/app'
import { Table } from 'antd'
import type { TableProps } from 'antd'

interface CommonTableProps<T extends CommonDataType> {
  tableData: T[]
  tableColumns: TableProps<T>['columns']
  children?: React.ReactNode
}
export default function CommonTable<T extends CommonDataType>({
  tableData,
  tableColumns,
  children,
}: CommonTableProps<T>) {
  type DataType = typeof tableData
  type SingleDatatype = DataType[number]

  return (
    <div>
      <div className="table-button-group mb-2">{children}</div>
      <Table<SingleDatatype>
        size="middle"
        columns={tableColumns}
        dataSource={tableData}
        bordered
      />
    </div>
  )
}
