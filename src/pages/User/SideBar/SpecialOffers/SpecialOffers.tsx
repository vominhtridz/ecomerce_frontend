import { NewIcon } from "../../../../images/centerIcons"
import { useMyContext } from "../../../../context/context"
import VoucherForYou from "./VoucherForYou"
import { Link } from "react-router-dom"
import { SidebarItemType } from "@/typescript/UserTypes"

export const SpecialOffers = ({ setvisibleItems, visibleItems }: SidebarItemType) => {
  const { langCode } = useMyContext()
  const handleShow = () => setvisibleItems("voucher")

  return (
    <div className='py-1'>
      <Link
        to={`/${langCode}/user/voucher`}
        onClick={handleShow}
        className='flex text-[14px] whitespace-nowrap hover:text-green-600 leading-4'
      >
        <p className='text-2xl mr-1.5 text-black rounded-full'>{NewIcon}</p>
        Ưu Đãi Dành riêng <br /> cho bạn
      </Link>

      {visibleItems == "voucher" ? <VoucherForYou /> : ""}
    </div>
  )
}
export default SpecialOffers
