import { FC, useEffect, useState } from "react"
import LocateMyLocationBtn from "../../button/LocateMyLocationBtn"
import MapComponent from "../../GoogleMap/GoogleMap"
import Loading from "../../Loading/Loading"
interface LocateLocationBoxTypes {
  handleLocateYourself: () => void
  setBooleanLocate: (e: boolean) => void
}
const LocateLocationBox: FC<LocateLocationBoxTypes> = ({ handleLocateYourself, setBooleanLocate }) => {
  const handleTurnOffLocate = () => setBooleanLocate(false)
  const [isloading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const TimeLoading = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => {
      clearTimeout(TimeLoading)
    }
  }, [])
  return (
    <div className='absolute h-[28rem] border border-slate-300 bottom-[-10%]  rounded-sm shadow bg-white p-4 left-0 right-0 '>
      <div className='  flex items-center pb-4 justify-between'>
        <h2 className='text-lg'>Chọn địa điểm</h2>
        <div className='flex items-center'>
          <LocateMyLocationBtn handleLocate={handleLocateYourself} />
          <button className='px-4 text-lg' onClick={handleTurnOffLocate}>
            X
          </button>
        </div>
      </div>
      {isloading ? <Loading /> : <MapComponent />}
    </div>
  )
}

export default LocateLocationBox
