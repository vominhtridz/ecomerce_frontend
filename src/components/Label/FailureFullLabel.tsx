import { FC } from "react"

interface FailureFullLabelTypes {
  text: string
}

const FailureFullLabel: FC<FailureFullLabelTypes> = ({ text }) => {
  return (
    <div className='fixed top-32 right-[40%] z-20'>
      <div className='flex items-center bg-white px-4 py-2.5 text-sm rounded-sm shadow-md border border-slate-200'>
        <p className='px-2 mr-2 py-0.5 text-sm flex items-center justify-center rounded-full bg-red-500 text-white'>
          X
        </p>
        <p className=''>{text}</p>
      </div>
    </div>
  )
}

export default FailureFullLabel
