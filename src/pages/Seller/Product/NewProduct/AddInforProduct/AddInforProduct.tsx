import { useState } from "react"
import OptionSelectImg from "./OptionSelectImg"
import CoverImage from "./CoverImage"
import VideoProduct from "./VideoProduct"
import NameProduct from "./NameProduct"
import Industry from "./Industry"
import ProductDescrip from "./ProductDescrip"
import AddProductImage from "./AddProductImage"

const AddInforProduct = () => {
  const [option, setOption] = useState<string>("")
  return (
    <div className='bg-white mx-4 pr-8 pl-2 w-full  rounded-md shadow border border-gray-100'>
      <h2 className='p-4 text-lg font-semibold'>Thiết lập thông tin</h2>
      <OptionSelectImg />
      <AddProductImage />
      <CoverImage />
      <VideoProduct />
      <NameProduct />
      <Industry />
      <ProductDescrip />
    </div>
  )
}

export default AddInforProduct
