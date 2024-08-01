import React from "react"
import Diagram from "./Diagram"
import Statistical from "./Statistical"
import { Link } from "react-router-dom"

const SellAnalysis = () => {
  function getCurrentDateTime() {
    const today = new Date()
    // Format the date to 'dd/MM/yyyy'
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`
    // Format the time to 'HH:mm'
    const formattedTime = `${today.getHours().toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")}`
    // Create the final string
    const result = `Hôm nay ${formattedTime} GMT+7 ${formattedDate} 12:00`

    return result
  }
  return (
    <div className='my-5 w-full'>
      <div className='flex items-center w-full'>
        <h2 className='text-lg font-semibold text-black p-2'>Phân tích bán hàng</h2>
        <p className='text-[13px] text-gray-700 pt-2'>{getCurrentDateTime()}</p>
        <Link to='/seller/data/analysis ' className='text-sm ml-auto   text-blue-500 hover:underline'>
          Xem thêm
        </Link>
      </div>
      <div className='w-full flex'>
        <Diagram />
        <Statistical />
      </div>
    </div>
  )
}

export default SellAnalysis
