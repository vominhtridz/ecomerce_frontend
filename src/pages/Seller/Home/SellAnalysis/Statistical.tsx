const options = [
  {
    text: "Lượt truy cập",
    count: 0,
  },
  {
    text: "Lượt xem",
    count: 0,
  },
  {
    text: "Đơn hàng",
    count: 0,
  },
  {
    text: "Tỷ lệ chuyển đổi",
    count: "0,000%",
  },
]
const Statistical = () => {
  const getOption = options.map((option, index) => (
    <div key={index} className={`w-1/2 p-4 text-center `}>
      <p className='text-[13px]'>{option.text}</p>
      <p className='font-semibold text-green-600'>{option.count}</p>
    </div>
  ))
  return <div className='w-[40%] flex flex-wrap'>{getOption}</div>
}

export default Statistical
