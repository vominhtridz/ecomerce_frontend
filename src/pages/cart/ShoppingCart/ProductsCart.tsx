import { ChangeEvent, MouseEvent, useState } from "react"
import mobilePhone from "..//..//..//images/products/MobilePhone.jfif"
import voucher4 from "..//..//..//images/Voucher/voucher4.4.png"
import RemoveBtn from "../../../components/button/RemoveBtn"
import MainPrices from "./MainPrices"
import Prices from "./Prices"
import CategoryRow from "./CategoryRow"
import { Link } from "react-router-dom"
import { useMyContext } from "@/context/context"

const ProductsCart = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [number, setNumber] = useState<string>("1")
  const { langCode } = useMyContext()
  function handleShowClasify() {
    setVisible(!visible)
  }
  const handleclick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setVisible(true)
  }
  const handleRemove = () => {}
  const handleDecement = () => setNumber(prev => prev - 1)
  const ChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1000) return
    if (!isNaN(parseFloat(e.target.value))) {
      setNumber(e.target.value)
    }
  }
  const handleIncrement = () => setNumber(prev => prev + 1)
  return (
    <div className='bg-white text-[13px] border-l-0 border-r-0  flex items-center px-4 py-3 border-b border border-slate-300 '>
      <input type='checkbox' name='' className='w-6 h-6 rounded-sm' id='' />
      <nav className='px-2 flex'>
        <img src={mobilePhone} className='w-20 h-20' alt='' />
        <Link to={`/${langCode}/infor`} className='hover:underline hover:text-green-600 px-2.5 text-sm'>
          Điện Thoại OPPO A18 (4GB/128GB) - Hàng Chính Hãng.
          <img src={voucher4} alt='' className='  rounde-sm' />
        </Link>
      </nav>
      <CategoryRow handleclick={handleclick} handleShowClasify={handleShowClasify} visible={visible} />
      <Prices handleDecement={handleDecement} ChangeNumber={ChangeNumber} handleIncrement={handleIncrement} number={number} />
      <label className='px-6 text-red-500'>₫3.690.000</label>
      <RemoveBtn handleRemove={handleRemove} />
    </div>
  )
}

export default ProductsCart
