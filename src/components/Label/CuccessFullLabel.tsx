import { FC } from "react"
import { CheckedIcon } from "../../images/centerIcons"

interface CuccessFullLabelTypes {
  text: string
}
const CuccessFullLabel: FC<CuccessFullLabelTypes> = ({ text }) => {
  return (
    <div className='fixed top-32 right-[40%] z-20'>
      <div className='flex items-center bg-white px-4 py-2.5 text-sm rounded-sm shadow-md border border-slate-200'>
        <p className='mx-2 text-xl rounded-full bg-green-500 text-white'>{CheckedIcon}</p>
        <p className=''>{text}</p>
      </div>
    </div>
  )
}

export default CuccessFullLabel
