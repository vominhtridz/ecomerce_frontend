import { CheckedIcon } from "@/images/centerIcons"

const options = [
  {
    check: CheckedIcon,
    title: "Thêm ít nhất 3 hình ảnh",
  },
  {
    check: CheckedIcon,
    title: "Thêm video sản phẩm",
  },
  {
    check: CheckedIcon,
    title: "Tên sản phẩm có ít nhất 25~100 kí tự",
  },
  {
    check: CheckedIcon,
    title: "Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm",
  },
  {
    check: CheckedIcon,
    title: "Thêm thương hiệu",
  },
]

const SuggestionInfor = () => {
  const getOption = options.map((option, index) => {
    return (
      <div className='cursor-pointer flex items-center py-2 px-4 hover:bg-gray-50 text-[13px]' key={index}>
        <p className='px-2 text-2xl text-slate-300'>{option.check}</p>
        <p className='text-black'>{option.title}</p>
      </div>
    )
  })
  return (
    <div className='h-[23rem] w-[20%] bg-white border border-gray-100 shadow rounded-md   '>
      <h2 className='text-lg bg-slate-100 py-4 px-4 select-none'>Yêu cầu điền thông tin Sản phẩm như sau</h2>
      <div className=''>{getOption}</div>
    </div>
  )
}

export default SuggestionInfor
