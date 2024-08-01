import { LoadingIcon } from "@/images/centerIcons"
import { FC } from "react"
interface SaveWhiteBtn {
  handleSave: () => void
  loading?: boolean
}
const SaveWhiteBtn: FC<SaveWhiteBtn> = ({ handleSave, loading }) => {
  return (
    <button
      disabled={loading == true ? true : false}
      onClick={handleSave}
      type='submit'
      className='px-5 text-sm   hover:shadow text-black hover:text-bg-green-600 hover:bg-gray-50 py-2 rounded-sm  border border-slate-300'
    >
      {loading ? <p className='text-lg flex  items-center justify-center'>{LoadingIcon}</p> : "Lưu"}
    </button>
  )
}

export default SaveWhiteBtn
