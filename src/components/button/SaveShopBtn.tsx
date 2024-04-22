import { FC } from "react"
interface SaveShopBtnTypes {
  handleSave: () => void
}
const SaveShopBtn: FC<SaveShopBtnTypes> = ({ handleSave }) => {
  return (
    <button
      onClick={handleSave}
      className='px-5 text-sm  bg-slate-50 py-2 rounded-sm text-black border border-slate-300'
    >
      Lưu
    </button>
  )
}

export default SaveShopBtn
