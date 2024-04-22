import { FC } from "react"
import AcceptBtn from "../../../components/button/AcceptBtn"
import BackBtn from "../../../components/button/BackBtn"
import BlackBtn from "../../../components/button/BlackBtn"
import BlueBtn from "../../../components/button/BlueBtn"
import { DownWhiteIcon } from "../../../images/centerIcons"

interface CategoryRowTypes {
  handleShowClasify: () => void
  visible: boolean
}
const CategoryRow: FC<CategoryRowTypes> = ({ handleShowClasify, visible }) => {
  return (
    <button className='relative' onClick={handleShowClasify}>
      <div className='flex items-center whitespace-nowrap'>
        <p className=''>Phân loại hàng </p>
        <p className='text-[10px] pt-1 px-4'>{DownWhiteIcon}</p>
      </div>
      <p className='text-base'>Xanh</p>
      {visible && (
        <div className='absolute top-full right-0 px-4 py-4 bg-white shadow rounded-sm border border-slate-200'>
          <div className='flex items-center'>
            <p className=''>Màu:</p>
            <BlueBtn />
            <BlackBtn />
          </div>
          <div className='my-5 flex items-center'>
            <BackBtn />
            <AcceptBtn />
          </div>
        </div>
      )}
    </button>
  )
}

export default CategoryRow
