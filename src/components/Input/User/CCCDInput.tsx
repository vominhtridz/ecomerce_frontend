interface CCCDInputType {
  number: string
  ChangeNumber: (e: string) => void
  error?: boolean
}

const CCCDInput = ({ number, ChangeNumber, error }: CCCDInputType) => {
  const checkError = error ? "border-red-500 outline-none" : "border-gray-300 outline-blue-500"
  return (
    <input
      type='text'
      className={`${checkError} px-2 italic py-2 text-[13px]  text-black border  rounded-sm bg-white w-full`}
      placeholder='Số CCCD'
      id='cccd'
      maxLength={12}
      onChange={e => ChangeNumber(e.target.value)}
      value={number}
    />
  )
}

export default CCCDInput
