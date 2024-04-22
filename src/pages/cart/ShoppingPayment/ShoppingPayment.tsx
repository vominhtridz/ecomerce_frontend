import OptionsPayment from "./OptionsPayment"
import Payment from "./Payment"

const ShoppingPayment = () => {
  return (
    <div className='flex items-center text-[13px] justify-between bg-white my-10 p-4 rounded-sm shadow '>
      <OptionsPayment />
      <Payment />
    </div>
  )
}

export default ShoppingPayment
