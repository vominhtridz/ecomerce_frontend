import { ChangeEvent, FC } from "react"

interface UserNameTypes {
  userName: string
  ChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
}
const UserName: FC<UserNameTypes> = ({ userName, ChangeUserName, error }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className={`${error ? "border-red-500 outline-red-500" : ""} w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black border-slate-400 rounded-sm shadow`}
      placeholder='UserName...'
      onChange={ChangeUserName}
      value={userName}
    />
  )
}
export default UserName
