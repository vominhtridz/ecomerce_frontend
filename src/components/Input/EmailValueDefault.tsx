import { FC } from "react"

interface EmailShopTypes {
  EmailDefault: string
}

const EmailValueDefault: FC<EmailShopTypes> = ({ EmailDefault }) => {
  return (
    <input
      disabled
      type='text'
      placeholder='Nhập vào...'
      className='pl-3 pr-1 cursor-not-allowed py-1.5 text-slate-400 rounded-sm  w-[26rem] border bg-slate-100 border-slate-300 outline-none text-sm'
      value={EmailDefault}
    />
  )
}

export default EmailValueDefault
