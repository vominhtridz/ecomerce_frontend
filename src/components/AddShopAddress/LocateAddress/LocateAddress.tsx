import { useState } from "react"
import { LocationIcon } from "../../../images/centerIcons"
import LocateLocationBox from "./LocateLocationBox"

const LocateAddress = () => {
  const [booleanLocate, setBooleanLocate] = useState<boolean>(false)
  function handleShow() {
    setBooleanLocate(true)
  }

  function handleLocateYourself() {}
  return (
    <div className='my-6 relative w-full'>
      <div className='flex border border-slate-400 rounde-sm   items-center py-1 px-4'>
        <p className='text-2xl pr-1 text-slate-400'>{LocationIcon}</p>
        <button className='text-left leading-4' onClick={handleShow}>
          <span className='text-[14px] my-1 pl-0.5'>Định vị</span>
          <p className='text-[10px] '>Giúp đơn hàng được giao nhanh nhất</p>
        </button>
      </div>
      {booleanLocate && (
        <LocateLocationBox handleLocateYourself={handleLocateYourself} setBooleanLocate={setBooleanLocate} />
      )}
    </div>
  )
}

export default LocateAddress
