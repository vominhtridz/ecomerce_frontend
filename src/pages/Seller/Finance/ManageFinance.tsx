import React from "react"
import { Outlet } from "react-router-dom"

const ManageFinance = () => {
  return (
    <div className='bg-white shadow p-4 border border-gray-100'>
      <Outlet />
    </div>
  )
}

export default ManageFinance
