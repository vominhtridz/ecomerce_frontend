import { Link } from "react-router-dom"
import { LoginIcon } from "../../../../images/centerIcons"
import ItemsOfAccount from "./ItemsOfAccount"
import { useMyContext } from "@/context/context"
import { SidebarItemType } from "@/typescript/UserTypes"

export const AccountOfMine = ({ setvisibleItems, visibleItems }: SidebarItemType) => {
  const { langCode } = useMyContext()
  const handleShow = () => setvisibleItems("account")
  return (
    <div className='py-2'>
      <Link
        to={`/${langCode}/user/account/profile`}
        onClick={handleShow}
        className='text-[14px] flex items-center whitespace-nowrap text-black hover:text-green-600 leading-4'
      >
        <p className='text-2xl mr-1.5 text-blue-500 rounded-full'>{LoginIcon}</p>
        Tài khoản của tôi
      </Link>
      {visibleItems == "account" ? <ItemsOfAccount /> : ""}
    </div>
  )
}
export default AccountOfMine
