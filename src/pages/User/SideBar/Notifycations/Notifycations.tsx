import { visibleItemType } from "@/typescript/UserTypes"
import { NotifycationsIcon } from "../../../../images/centerIcons"
import ItemsOfNotifycations from "./ItemsOfNotifycations"
import { Link } from "react-router-dom"
import { useMyContext } from "@/context/context"

export const Notifycations = ({ setvisibleItems, visibleItems }: visibleItemType) => {
  const { langCode } = useMyContext()
  const handleShow = () => setvisibleItems("notification")
  return (
    <div className=' py-2'>
      <Link to={`/${langCode}/user/Notifications`} className='flex items-center' onClick={handleShow}>
        <p className='text-[17.5px] mr-3 text-green-500 rounded-full'>{NotifycationsIcon}</p>
        <p className='text-[14px] text-black block hover:text-green-600 leading-4'>Thông báo</p>
      </Link>
      {visibleItems == "notification" ? <ItemsOfNotifycations /> : ""}
    </div>
  )
}
export default Notifycations
