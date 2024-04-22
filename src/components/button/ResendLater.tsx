import { FC } from "react"

interface ResendLaterTypes {
  time: number
}

const ResendLater: FC<ResendLaterTypes> = ({ time }) => {
  return <label className='px-8 py-2 rounded-sm border  border-red-500 text-red-400'>Gửi lại {time}s</label>
}

export default ResendLater
