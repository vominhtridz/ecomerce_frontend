import { ChangeEvent, useState } from "react"
import mobilePhone from "..//..//..//images/products/MobilePhone.jfif"
import voucher4 from "..//..//..//images/Voucher/voucher4.4.png"
import RemoveBtn from "../../../components/button/RemoveBtn"
import MainPrices from "./MainPrices"
import Prices from "./Prices"
import CategoryRow from "./CategoryRow"

const ProductsCart = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [number, setNumber] = useState<number>(0)
  function handleShowClasify() {
    setVisible(!visible)
  }
  const handleDecement = () => setNumber(prev => prev - 1)
  const ChangeNumber = (e: ChangeEvent<HTMLInputElement>) => setNumber(parseInt(e.target.value))
  const handleIncrement = () => setNumber(prev => prev + 1)
  return (
    <div className='bg-white text-[14px] border-l-0 border-r-0  flex items-center px-4 py-3 border-b border border-slate-300 '>
      <input type='checkbox' name='' className='w-6 h-6 rounded-sm' id='' />
      <nav className='px-2 flex'>
        <img src={mobilePhone} className='w-20 h-20' alt='' />
        <div className='px-2.5 text-sm'>
          Điện Thoại OPPO A18 (4GB/128GB) - Hàng Chính Hãng.
          <img src={voucher4} alt='' className='  rounde-sm' />
        </div>
      </nav>
      <CategoryRow handleShowClasify={handleShowClasify} visible={visible} />
      <Prices
        handleDecement={handleDecement}
        ChangeNumber={ChangeNumber}
        handleIncrement={handleIncrement}
        number={number}
      />
      <MainPrices />
      <RemoveBtn />
    </div>
  )
}

export default ProductsCart
