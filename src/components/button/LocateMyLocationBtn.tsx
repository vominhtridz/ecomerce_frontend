import { FC } from "react"

interface LocateMyLocationBtnTypes {
  handleLocate: () => void
}

const LocateMyLocationBtn: FC<LocateMyLocationBtnTypes> = ({ handleLocate }) => {
  return (
    <button onClick={handleLocate} className='rounded-sm text-white bg-red-500 px-4 py-1.5 text-[13px] '>
      Định vị vị trí của tôi
    </button>
  )
}

export default LocateMyLocationBtn
