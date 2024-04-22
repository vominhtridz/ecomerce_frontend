import freeship from "..//..//..//images/products/freeShipImg.png"
import NameOfStore from "./NameOfStore"
import OptionsNavPrices from "./OptionsNavPrices"
import ProductsCart from "./ProductsCart"
import VoucherShopping from "./VoucherShopping"
const ShoppingCart = () => {
  return (
    <section className='w-full text-[13px]'>
      <h2 className='flex items-cener text-[15px] bg-yellow-50 border border-yellow-200 text-slate-700 rounded-sm px-4 py-2 w-full '>
        <img src={freeship} alt='' className='w-6 h-6 bg-green-600 rounded-sm' />
        <p className='px-3 pt-0.5'>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</p>
      </h2>
      <OptionsNavPrices />
      <NameOfStore />
      <ProductsCart />
      <VoucherShopping />
    </section>
  )
}

export default ShoppingCart
