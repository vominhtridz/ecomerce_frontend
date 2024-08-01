import React from "react"
import ListMustDo from "./ListMustDo"
import SellAnalysis from "./SellAnalysis/SellAnalysis"

const SellerHome = () => {
  return (
    <div className=' bg-white rounded-md shadow border border-gray-100 p-4'>
      <ListMustDo />
      <SellAnalysis />
    </div>
  )
}

export default SellerHome
