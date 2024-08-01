const manageOptionsNavPrices = ["Đơn giá", "Số lượng", "Số tiền", "Thao tác"]
const OptionsNavPrices = () => {
  const getOptionsNavPrices = () =>
    manageOptionsNavPrices.map((option, index) => (
      <p className='px-12 text-[14px] text-slate-600' key={index}>
        {option}
      </p>
    ))
  return (
    <div className=' my-4 text-base text-[13px] flex items-center justify-between bg-white rounded-sm px-4 py-4 '>
      <nav className='flex items-center text-[14px]'>
        <input type='checkbox' className='w-6 h-6 border-none shadow  rounded-sm' />
        <p className='px-4'>Sản phẩm</p>
      </nav>
      <nav className='flex items-center  justify-between'>{getOptionsNavPrices()}</nav>
    </div>
  )
}

export default OptionsNavPrices
