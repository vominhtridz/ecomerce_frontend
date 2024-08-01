import { Outlet } from "react-router-dom"

import Header from "./Header"
import SideBar from "./SideBar/SideBar"
const LayoutSeller = () => {
  return (
    <div className='bg-slate-50 w-full min-h-[100vh]'>
      <Header />
      <div className='flex'>
        <SideBar />
        <div className='w-[80%] my-4  ml-[19%]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayoutSeller
