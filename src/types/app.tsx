export interface CommonDataType {
  [key: string]: unknown
}
export interface Pagination {
  pageNum: number
  pageSize: number
}

export enum InputType {
  Input,
  Select,
  DatePicker,
  RangePicker,
  Checkbox,
  Radio,
  TextArea,
  Upload,
  TreeSelect,
  Switch,
  Cascader,
  AutoComplete,
  Slider,
  Rate,
  Button,
  InputNumber,
  TimePicker,
  Tree,
  Transfer,
  CheckboxGroup,
}

export interface SelectType {
  label: string
  value: string | number
}
export interface CommonSearchType {
  type: InputType
  placeholder?: string
  field: string
  label?: string
  options?: SelectType[]
  onChange?: (value: string) => void
}

export interface ErrorType {
  message?: string
}

export enum MenuType {
  Menu = 'menu',
  Button = 'button',
  Link = 'link',
}
