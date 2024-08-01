import { FC } from "react"
import { CheckedIcon } from "../../images/centerIcons"

interface CuccessFullLabelTypes {
  text: string | undefined
}
const CuccessFullLabel: FC<CuccessFullLabelTypes> = ({ text }) => {
  return (
    <div className='fixed top-0 z-50 right-0 left-0 bottom-0 '>
      <div className='absolute top-28 right-[40%] z-20'>
        <div className='flex items-center bg-white px-4 py-2.5 text-sm rounded-sm shadow border border-slate-300'>
          <p className='mx-2 text-xl rounded-full bg-green-500 text-white'>{CheckedIcon}</p>
          <label className=''>{text}</label>
        </div>
      </div>
    </div>
  )
}

export default CuccessFullLabel
