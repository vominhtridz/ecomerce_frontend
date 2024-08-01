import { ChangeEvent, FC } from "react"
import NumberInput from "../../../components/Input/NumberInput"
import DecrementBtn from "../../../components/button/DecrementBtn"
import IncrementBtn from "../../../components/button/IncrementBtn"

interface PricesTypes {
  number: number
  handleDecement: () => void
  ChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
  handleIncrement: () => void
}
const Prices: FC<PricesTypes> = ({ number, handleDecement, ChangeNumber, handleIncrement }) => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center px-6'>
        <label className='px-1 line-through'>₫3.990.000</label>
        <label className='px-1'>₫3.690.000</label>
      </div>
      <nav className='flex items-center h-8 pl-9'>
        <DecrementBtn handleDecement={handleDecement} />
        <NumberInput number={number} ChangeNumber={ChangeNumber} />
        <IncrementBtn handleIncrement={handleIncrement} />
      </nav>
    </div>
  )
}

export default Prices
