import CusTomBtn from "@/components/button/CustomBtn"
import AddInforPrice from "./AddInforPrice/AddInforPrice"
import AddInforProduct from "./AddInforProduct/AddInforProduct"
import SuggestionInfor from "./SuggestionInfor"
import Transport from "./Transport"
import SaveShopBtn from "@/components/button/SaveShopBtn"
import Header from "../../Header"

const NewProduct = () => {
  const handleCancel = () => {}
  const handleSave = () => {}
  return (
    <div className=''>
      <Header />
      <div className='flex px-14 py-6'>
        <SuggestionInfor />
        <div className='w-[80%]'>
          <AddInforProduct />
          <AddInforPrice />
          <Transport />
          <div className='flex items-center mb-10 mt-4 justify-end'>
            <CusTomBtn handleClick={handleCancel} text='Hủy' />
            <p className='px-2'></p>
            <SaveShopBtn handleSave={handleSave} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
