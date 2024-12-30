import { Breadcrumb } from 'antd'

export default function LBreadcrumb() {
  const items = [
    {
      title: 'Home',
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: 'An Application',
    },
  ]
  return (
    <>
      <Breadcrumb className="mt-2 mb-2" items={items} />
    </>
  )
}
