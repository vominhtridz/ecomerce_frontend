interface CartNumberType {
  cartNum: string
  ChangeCartNum: (e: string) => void
  error: boolean
}

const CartNumber = ({ cartNum, ChangeCartNum, error }: CartNumberType) => {
  const checkError = error ? "border-red-500 outline-red-500" : "border-gray-300 outline-blue-500"
  return (
    <input
      type='text'
      className={`${checkError} px-2 italic py-2 text-[12px]  text-black border  rounded-sm bg-white w-full`}
      placeholder='Số thẻ'
      id='cardnumber'
      maxLength={17}
      onChange={e => ChangeCartNum(e.target.value)}
      value={cartNum}
    />
  )
}

export default CartNumber
