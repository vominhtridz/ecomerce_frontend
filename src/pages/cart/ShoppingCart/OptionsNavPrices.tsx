const manageOptionsNavPrices = ["Đơn giá", "Số lượng", "Số tiền", "Thao tác"]
const OptionsNavPrices = () => {
  const getOptionsNavPrices = () =>
    manageOptionsNavPrices.map((option, index) => {
      return (
        <p className='px-12 text-slate-600' key={index}>
          {option}
        </p>
      )
    })
  return (
    <div className=' my-4 text-base flex items-center justify-between bg-white rounded-sm px-4 py-4 '>
      <nav className='flex items-center'>
        <input type='checkbox' className='w-6 h-6 border-none shadow  rounded-sm' />
        <p className='px-4'>Sản phẩm</p>
      </nav>
      <nav className='flex items-center justify-between'>{getOptionsNavPrices()}</nav>
    </div>
  )
}

export default OptionsNavPrices
