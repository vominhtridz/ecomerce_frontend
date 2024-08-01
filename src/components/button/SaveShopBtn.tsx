import { LoadingIcon } from "@/images/centerIcons"
import { FC } from "react"
interface SaveShopBtnTypes {
  handleSave: () => void
  loading?: boolean
}
const SaveShopBtn: FC<SaveShopBtnTypes> = ({ handleSave, loading }) => {
  return (
    <button
      disabled={loading == true ? true : false}
      onClick={handleSave}
      type='submit'
      className='px-5 text-sm bg-green-500 hover:border hover:border-green-200 hover:shadow hover:text-bg-green-600 text-white py-2 rounded-sm  border border-slate-300'
    >
      {loading ? <p className='text-lg flex items-center justify-center'>{LoadingIcon}</p> : "Lưu"}
    </button>
  )
}

export default SaveShopBtn
