import { LoadingIcon } from "@/images/centerIcons"
import { FormEvent } from "react"

interface saveInfoType {
  handleSave: (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => void
  loading: boolean
}
const SaveInfoBtn = ({ handleSave, loading }: saveInfoType) => {
  return (
    <button disabled={loading == true ? true : false} className='px-6 py-2  bg-green-500   text-white rounded-sm' onClick={handleSave}>
      {loading ? <p className='text-lg flex items-center justify-center'>{LoadingIcon}</p> : "Gửi"}
    </button>
  )
}
export default SaveInfoBtn
