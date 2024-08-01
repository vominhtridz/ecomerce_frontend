interface PrimaryPostType {
  primaryCode: string
  ChangePrimaryCode: (e: string) => void
  error: boolean
}
const PrimaryPost = ({ primaryCode, ChangePrimaryCode, error }: PrimaryPostType) => {
  const checkError = error ? "border-red-500 outline-none" : "border-gray-300 outline-blue-500"
  return (
    <input
      type='text'
      id='PRICode'
      className={`${checkError} px-2 py-2 text-[13px]  text-black border  rounded-sm bg-white w-full`}
      value={primaryCode}
      placeholder='Mã bưu chính '
      onChange={e => ChangePrimaryCode(e.target.value)}
    />
  )
}

export default PrimaryPost
