interface CodeCvvInputType {
  codeCvv: string
  ChangeCodeCvv: (e: string) => void
}
const CodeCvvInput = ({ codeCvv, ChangeCodeCvv }: CodeCvvInputType) => {
  return (
    <input
      type='password'
      className={` px-2 py-2 text-[13px] outline-blue-500  text-black border  rounded-sm bg-white w-full`}
      value={codeCvv}
      id='codecvv'
      required
      placeholder='Mã CVV'
      onChange={e => ChangeCodeCvv(e.target.value)}
    />
  )
}

export default CodeCvvInput
