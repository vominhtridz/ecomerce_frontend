import { useMyContext } from "@/context/context"
import { ChangeEvent, FC } from "react"

interface AccountUserNameTypes {
  userName: string
  ChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void
  userNameErr: boolean
}
const AccountUserName: FC<AccountUserNameTypes> = ({ userName, ChangeUserName, userNameErr }) => {
  const { dataUser } = useMyContext()
  const checkErr = userNameErr ? "border-red-500" : "border-slate-400"
  const justongeChange = dataUser?.onechangename ? "bg-gray-200 user-select-none opacity-80 text-gray-500" : ""

  return (
    <nav className='flex items-center text-black'>
      <p className='whitespace-nowrap'>Tên Đăng Nhập </p>
      <div className='pl-2 w-full'>
        <input
          autoComplete='new-password'
          disabled={dataUser?.onechangename}
          type='text'
          className={`${checkErr} ${justongeChange} outline-none w-full px-2 py-1.5 text-sm transition duration-500   border my-2  text-black  rounded-sm `}
          placeholder='Tên đăng Nhập...'
          onChange={ChangeUserName}
          value={userName}
          required
        />
      </div>
    </nav>
  )
}
export default AccountUserName
