import RemoveBtn from "@/components/button/RemoveBtn"
import UpdateBtn from "@/components/button/UpdateBtn"

const ShowAdress = ({ data, handleUpdate, handleRemove }: any) => {
  const getUserAddr = () =>
    data.map((item: any, index: number) => (
      <section className='flex border my-2 p-2 shadow rounded-md  border-gray-200 justify-between' key={index}>
        <div className='text-slate-500 w-full'>
          <nav className='flex items-center justify-between  text-sm my-1'>
            <div className='flex items-center'>
              <p className=' py-1 pr-2 text-black'>{item.first_lastname}</p>
              <span className='text-xl text-slate-400'>|</span>
              <p className=' py-1 pl-2'>(+84) {item.phonenumber}</p>
            </div>
            <nav className='flex items-center text-black pt-1'>
              <UpdateBtn handleUpdate={() => handleUpdate(item)} />
              <RemoveBtn handleRemove={() => handleRemove(item.addrid, item.userid)} />
            </nav>
          </nav>
          <nav className='my-2'>
            <p className='text-[12.5px] italic leading-4'>{item.detailaddr}</p>
            <address className='text-[12.5px] italic leading-4 my-1 '>{item.addr}</address>
          </nav>
          {item.setdefault && <label className=' text-[12.8px] my-2  font-sans p-1 border border-red-600 text-red-500'>Mặc định</label>}
        </div>
      </section>
    ))
  return <div className=''>{!data ? <p className='py-20 flex item-center justify-center'>Chưa có Địa chỉ nào</p> : getUserAddr()}</div>
}
export default ShowAdress
