import { FC } from "react"

interface BackBtnTypes {
  handleBack: () => void
}
const BackBtn: FC<BackBtnTypes> = ({ handleBack }) => {
  return (
    <button
      className='px-8 flex items-center whitespace-nowrap 
       justify-center py-2 mx-1 rounded-sm hover:bg-slate-50'
      onClick={handleBack}
    >
      Trở lại
    </button>
  )
}

export default BackBtn
