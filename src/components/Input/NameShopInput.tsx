interface NameShopInputTypes {
  nameShopInput: string
  error: boolean
  handleChangeName: (e: string) => void
}

const NameShopInput = ({ handleChangeName, nameShopInput, error }: NameShopInputTypes) => {
  const Checkerror = error ? "border-red-500 " : "border-slate-400 "
  return (
    <input
      type='text'
      required
      id='NameShopInput'
      name='NameShopInput'
      placeholder='Nhập vào...'
      className={`${Checkerror} pl-3 pr-1 py-1.5 bg-white rounded-sm  w-full border  outline-none text-sm`}
      onChange={e => handleChangeName(e.target.value)}
      value={nameShopInput}
    />
  )
}

export default NameShopInput
