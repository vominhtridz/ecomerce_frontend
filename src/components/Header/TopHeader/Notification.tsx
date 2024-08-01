import { NotifycationsIcon } from "@/images/centerIcons"
import { useState } from "react"

const Notification = () => {
  const [shownotifi, setShownotifi] = useState<boolean>(false)
  const handleShow = () => setShownotifi(!shownotifi)
  const HandleOff = () => setShownotifi(false)
  return (
    <div
      onMouseEnter={handleShow}
      onMouseLeave={HandleOff}
      className='max-lg:w-full  pr-6 pl-2 flex justify-items-center relative max-lg:hidden whitespace-nowrap'
    >
      <div className='flex items-center cursor-pointer'>
        <p className='pr-1 text-lg text-green-500'>{NotifycationsIcon}</p> Thông báo
      </div>
      {shownotifi && (
        <div className='absolute top-full  rounded-md right-0  w-[20rem] h-[15rem] bg-white shadow border border-gray-100'>
          <h2 className='flex items-center justify-center py-auto'> Chưa có thông báo nào</h2>
        </div>
      )}
    </div>
  )
}

export default Notification
