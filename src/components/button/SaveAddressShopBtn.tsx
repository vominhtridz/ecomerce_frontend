import { FC } from "react"
interface SaveShopBtnTypes {
  handleSave: () => void
}
const SaveAddressShopBtn: FC<SaveShopBtnTypes> = ({ handleSave }) => {
  return (
    <button onClick={handleSave} className='px-10  bg-green-500 py-2 rounded-sm text-white border border-green-400'>
      Lưu
    </button>
  )
}

export default SaveAddressShopBtn
