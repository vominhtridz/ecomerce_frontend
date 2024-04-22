import { ChangeEvent, FC } from "react"

interface UserAdressTypes {
  adress: string
  ChangeAdress: (e: ChangeEvent<HTMLInputElement>) => void
}
const UserAdress: FC<UserAdressTypes> = ({ adress, ChangeAdress }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className='w-full p-4 transition outline-blue-300   duration-500   border my-2  text-black border-slate-400 rounded-sm bg-[#e8f0fe]'
      placeholder='Enter Your UserAdress...'
      onChange={ChangeAdress}
      value={adress}
      required
    />
  )
}
export default UserAdress
