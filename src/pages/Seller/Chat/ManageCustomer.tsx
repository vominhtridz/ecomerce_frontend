import React from "react"
import { Outlet } from "react-router-dom"

const ManageCustomer = () => {
  return (
    <div className='bg-white rounded-md shadow border border-gray-100 p-4'>
      <Outlet />
    </div>
  )
}

export default ManageCustomer
