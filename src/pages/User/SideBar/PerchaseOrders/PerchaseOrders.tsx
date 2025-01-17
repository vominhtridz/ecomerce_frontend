import { visibleItemType } from "@/typescript/UserTypes"
import { Bagicon } from "../../../../images/centerIcons"

export const PerchaseOrders = ({ setvisibleItems, visibleItems }: visibleItemType) => {
  const handleShow = () => {}

  return (
    <div className='py-2'>
      <button className='flex items-center' onClick={handleShow}>
        <p className='text-[17.5px] mr-3 text-green-500 rounded-full'>{Bagicon}</p>
        <p className='text-[14px] text-black block hover:text-green-600 leading-4'>Đơn Mua</p>
      </button>
    </div>
  )
}
export default PerchaseOrders
