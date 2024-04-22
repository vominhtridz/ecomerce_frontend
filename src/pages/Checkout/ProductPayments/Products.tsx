import img from "..//..//..//images/products/MobilePhone.jfif"
const Products = () => {
  return (
    <nav className='flex items-center justify-between text-[13px]'>
      <div className='flex items-center'>
        <img src={img} className='w-16 h-14' alt='' />
        <div className='px-6'>
          <p className='text-base whitespace-nowrap py-1.5 leading-5'>
            COMBO 10 Móc Nhôm Treo Quần Áo Người Lớn - MÓC ÁO NHÔM
          </p>
          <label className='border rounded-sm px-1  text-[10px] border-red-500 text-red-600'>
            Đổi ý miễn phí 15 ngày
          </label>
        </div>
      </div>
      <div className=' text-base text-slate-500'>Loại: (MÓC NGƯỜILỚN 1,5kg)</div>
      <div className='flex  items-center'>
        <p className='px-16 text-black'>₫12.500</p>
        <p className='px-16'>2</p>
        <p className='px-16'>₫25.000</p>
      </div>
    </nav>
  )
}

export default Products
