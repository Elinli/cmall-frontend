export interface CommonDataType {
  [key: string]: unknown
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
export interface CommonSearchType {
  type: InputType
  placeholder?: string
  field: string
  label?: string
}
