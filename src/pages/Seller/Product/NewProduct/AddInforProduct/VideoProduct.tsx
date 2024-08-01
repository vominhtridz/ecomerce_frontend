import { ImgIcon } from "@/images/Svg/svgImage"

const VideoProduct = () => {
  return (
    <div className='flex items-center my-4 '>
      <div className='flex items-center mr-4 text-sm whitespace-nowrap justify-end  w-[14.7rem]'>
        <p className='text-lg text-red-500'>*</p> Thêm Video
      </div>
      <div className=''>
        <label className='py-4 px-2 mx-2 w-20 h-20 flex flex-col justify-center items-center rounded-md border  border-dashed  hover:bg-green-50 hover:border-gray-400 cursor-pointer border-gray-300'>
          <p className='text-xl text-green-500 pb-1'>{ImgIcon}</p>
          <p className='text-green-600 text-[11px] leading-3 pl-0.5 select-none whitespace-nowrap`'>Thêm video </p>
        </label>
        <p className='text-slate-400 text-[11px] leading-3 pl-0.5 select-none pt-0.5'>
          Kích thước tối đa 30Mb, độ phân giải không vượt quá 1280x1280px Độ dài: 10s-60s Định dạng: MP4 Lưu ý: sản phẩm có thể hiển thị
          trong khi video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý thành công.
        </p>
      </div>
    </div>
  )
}

export default VideoProduct
