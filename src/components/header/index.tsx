import Nav from './Nav'
import LogoImg from '@/assets/images/huawei_logo.png'

export default function Header() {
  return (
    <>
      <Nav></Nav>
      <div className="h-16 w-full bg-gray-100 flex items-center pl-48 pr-10">
        <img src={LogoImg} alt="" className="w-28" />
      </div>
    </>
  )
}
