interface EmailShopTypes {
  email: string
  ChangeEmail: (e: string) => void
  disable?: boolean
}

const EmailShop = ({ ChangeEmail, email, disable }: EmailShopTypes) => {
  return (
    <input
      required
      type='text'
      disabled={disable}
      placeholder='Nhập vào...'
      className={`px-2 py-1.5 w-full  rounded-sm  border border-slate-400 outline-none text-sm ${disable ? "bg-gray-100 opacity-80" : ""}`}
      onChange={e => ChangeEmail(e.target.value)}
      value={email}
    />
  )
}

export default EmailShop
