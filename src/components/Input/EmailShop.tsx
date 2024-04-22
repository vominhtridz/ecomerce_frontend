import { ChangeEvent, FC } from "react"

interface EmailShopTypes {
  email: string
  ChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailShop: FC<EmailShopTypes> = ({ ChangeEmail, email }) => {
  return (
    <input
      required
      type='text'
      placeholder='Nhập vào...'
      className='pl-3 pr-1 py-1.5 rounded-sm  w-[26rem] border border-slate-400 outline-none text-sm'
      onChange={ChangeEmail}
      value={email}
    />
  )
}

export default EmailShop
