const options = [
  {
    text: "Tổng lượt đánh giá",
    count: 0,
  },
  {
    text: "Tỷ lệ đánh giá đơn hàng",
    count: 0,
  },
  {
    text: "Tỷ lệ đánh giá tốt",
    count: 0,
  },
]
const option2 = [
  {
    text: "Tổng lượt đánh giá tiêu cực",
    count: 0,
  },
  {
    text: "Đánh giá gần đây",
    count: 0,
  },
]
const Evaluate = () => {
  const getOptions = options.map((option, index) => (
    <div className='text-center border-r border-gray-200 w-1/3 px-20 py-4 ' key={index}>
      <p className='py-2 whitespace-nowrap text-sm'>{option.text}</p>
      <p className='text-xl'>{option.count}</p>
    </div>
  ))
  const getOption2 = option2.map((option, index) => (
    <div className='text-center border-r border-gray-200 w-1/2 px-20 py-4 ' key={index}>
      <p className='py-2 whitespace-nowrap text-sm'>{option.text}</p>
      <p className='text-xl'>{option.count}</p>
    </div>
  ))
  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg'>Quản lý Đánh giá</h2>
        <div className='flex items-center  text-gray-600'>
          <p className=' text-base px-4 pb-1'>Giai đoạn từ</p>
          <p className='text-[13.5px]'>2/2/2024</p>
          <p className='text-[13.5px] px-1'>Đến</p>
          <p className='text-[13.5px]'>2/2/2024</p>
        </div>
      </div>
      <div className='flex my-8 justify-between rounded-md shadow border border-gray-200 '>{getOptions}</div>
      <div className='flex my-8 justify-between rounded-md shadow border border-gray-200 '>{getOption2}</div>
      <div className=' mt-8'>
        <h2 className='text-lg'>Danh sách đánh giá</h2>
      </div>
    </div>
  )
}

export default Evaluate
