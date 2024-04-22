const ManageRouteSeller = ["Thông tin shop", "Cài đặt vận chuyển", "Thông tin thuế", "Thông tin định danh", "Hoàn tất"]
const RouteSeller = () => {
  const getManageRouteSeller = () =>
    ManageRouteSeller.map((route, index) => {
      return (
        <div className='px-10 ' key={index}>
          <p className='relative mx-auto my-2.5 w-3 h-3 bg-red-500 rounded-full'>
            {route !== "Hoàn tất" ? (
              <span className='absolute w-36 border-b border-slate-300 top-1/2 left-full ml-4'></span>
            ) : (
              ""
            )}
          </p>

          <p className='text-sm whitespace-nowrap'>{route}</p>
        </div>
      )
    })
  return (
    <nav className='p-4 border-b border-slate-200 w-full px-10 flex items-center justify-center'>
      {getManageRouteSeller()}
    </nav>
  )
}

export default RouteSeller
