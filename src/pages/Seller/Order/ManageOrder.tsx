import CusTomBtn from "@/components/button/CustomBtn"
import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import OrderOptions from "./OrderOptions"

const ManageOrder = () => {
  const HandlePrint = () => {}
  const HistoryPrintPort = () => {}
  return (
    <div className='bg-white shadow p-4 border border-gray-100'>
      <div className='flex justify-between'>
        <h2 className='text-lg'>XÁC NHẬN ĐƠN HÀNG</h2>
        <div className=' flex items-center'>
          <CusTomBtn text='Xuất' handleClick={HandlePrint} />
          <p className='px-2'></p>
          <CusTomBtn text='Lịch sử báo cáo' handleClick={HistoryPrintPort} />
        </div>
      </div>
      <OrderOptions />
      <Outlet />
    </div>
  )
}

export default ManageOrder
