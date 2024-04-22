import { FC } from "react"

interface SendBtn {
  handleSend: () => void
}
const SendBtn: FC<SendBtn> = ({ handleSend }) => {
  return (
    <button className='px-8 py-2 rounded-sm border border-red-500 text-red-400' onClick={handleSend}>
      Gửi
    </button>
  )
}

export default SendBtn
