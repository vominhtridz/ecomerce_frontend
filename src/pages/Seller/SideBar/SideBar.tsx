import { Bagicon, CustomerIcon, DataIcon, FinanceIcon, ManageIcon, ShopIcon, UpIcon, downIcon, marketingIcon } from "@/images/centerIcons"
import { Link } from "react-router-dom"

const options = [
  {
    iconsUp: UpIcon,
    iconDown: downIcon,
    icons: ManageIcon,
    title: "Quản lý đơn hàng",
    list: [
      { content: "Tất cả", route: "/seller/manage/order/all" },
      { content: "Xác Nhận đơn hàng", route: "/seller/manage/order/confirm" },
      { content: "Đơn hủy", route: "/seller/manage/order/cancel" },
    ],
  },
  {
    iconsUp: UpIcon,
    iconDown: downIcon,
    icons: Bagicon,
    title: "Quản lý sản phẩm",
    list: [
      { content: "Tất cả sản phẩm", route: "/seller/manage/product/all" },
      { content: "thêm sản phẩm", route: "/seller/product/new" },
    ],
  },
  {
    iconsUp: UpIcon,
    iconDown: downIcon,
    icons: CustomerIcon,
    title: "Chăm xóc khách hàng",
    list: [
      { content: "Quản lý chat", route: "/seller/customer/chat" },
      { content: "Quản lý đánh giá", route: "/seller/customer/evaluate" },
    ],
  },
  {
    iconsUp: UpIcon,
    iconDown: downIcon,
    icons: FinanceIcon,
    title: "Tài Chính",
    list: [
      { content: "Số dư tài khoản", route: "/seller/finance/blance" },
      { content: "Tài khoản ngân hàng", route: "/seller/finance/bank_account" },
      { content: "Doanh thu", route: "/seller/finance/revenue" },
    ],
  },
  {
    iconsUp: UpIcon,
    iconDown: downIcon,
    icons: DataIcon,
    title: "Dữ liệu",
    list: [
      { content: "Phân tích bán hàng", route: "/seller/data/analysis" },
      { content: "Hiệu quả hoạt động", route: "/seller/data/effective" },
    ],
  },
  {
    iconsUp: UpIcon,
    iconDown: downIcon,
    icons: ShopIcon,
    title: "Quản lý Shop",
    list: [
      { content: "Hồ sơ Shop", route: "/seller/manage/shop/profile" },
      { content: "Giao diện Shop", route: "/seller/manage/shop/client" },
      { content: "Thiết lập Shop", route: "/seller/manage/shop/settings" },
    ],
  },
]

const SideBar = () => {
  const getOptions = options.map((option, index) => (
    <div className='relative pb-4' key={index}>
      <div className='cursor-pointer flex items-center justify-between'>
        <div className='flex '>
          <p className='text-base text-gray-400 '>{option.icons}</p>
          <p className='text-sm text-slate-500 leading-4 px-2 font-semibold'>{option.title}</p>
        </div>
        <p className='text-sm text-slate-500'>{option.iconsUp}</p>
      </div>

      <div className='aboslute top-full left-0 right-0'>
        {option.list.map((item, index) => (
          <Link to={item.route} key={index} className='w-full block cursor-pointer text-black hover:text-green-500 text-[13px] px-4 py-1'>
            {item.content}
          </Link>
        ))}
      </div>
    </div>
  ))
  return <div className='bg-white overflow-y-auto fixed h-[550px] rounded-md shadow border w-[18%] border-gray-200 p-4 '>{getOptions}</div>
}

export default SideBar
