import { ChangeEvent, FC } from "react"

interface DefaultNameTypes {
  defaultName: string
  ChangeDefaultName: (e: ChangeEvent<HTMLInputElement>) => void
}

const DefaultName: FC<DefaultNameTypes> = ({ defaultName, ChangeDefaultName }) => {
  return (
    <div className='flex items-center pl-[4.3rem] w-full '>
      <label className='whitespace-nowrap block pr-4'>Tên </label>
      <input
        autoComplete='new-password'
        type='text'
        className='outline-none  w-full  px-2 py-1.5 text-sm transition duration-500   border my-2  text-black border-slate-400 rounded-sm '
        placeholder='Tên của bạn...'
        onChange={ChangeDefaultName}
        value={defaultName}
        required
      />
    </div>
  )
}
export default DefaultName
