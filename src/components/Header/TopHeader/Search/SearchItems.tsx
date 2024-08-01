import { FC, MouseEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ShopIcon } from "../../../../images/centerIcons"
import discountImg from "..//..//..//..//images/discount/discount-2789863_1280.webp"
import { useMyContext } from "../../../../context/context"
import { SearchItemsTypes } from "@/typescript/HeaderTypes"
const SearchItems: FC<SearchItemsTypes> = ({ SearchInput, ChangeSearch, handleFocus, checkFocus, handleClick, handleBlur }) => {
  const { langCode } = useMyContext()
  const navigate = useNavigate()
  //--------------------------------- HANDLE SEARCH ONE -----------------------------
  const handleSearchOne = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`${`/${langCode}/search/123`}`)
  }
  //--------------------------------- RENDER ELEMENT -----------------------------
  return (
    <div className='absolute w-full pt-1' onBlur={handleBlur}>
      <input
        value={SearchInput}
        onChange={ChangeSearch}
        onFocus={handleFocus}
        type='text'
        className='text-sm p-2 relative  w-full outline-none border-slate-400 border rounded-sm'
        placeholder='Tìm kiếm ...'
      />
      {/* //--------------------------------- CHECK FOCUS INPUT ----------------------------- */}
      {checkFocus && (
        <div className='abosulte bg-white top-full mt-1 left-0 right-10 shadow-md rounded-sm '>
          {!SearchInput && (
            <Link to={`/${langCode}`} className='flex items-center justify-between px-2'>
              Săn sản phấm....
              <img src={discountImg} className='w-[80px] h-full py-1' alt='' />
            </Link>
          )}
          {/* //--------------------------------- SEARCH INPUT ----------------------------- */}
          {SearchInput && (
            <section className='w-full'>
              <div className='flex items-center px-2 py-2'>
                <p className='text-base text-green-600'>{ShopIcon}</p>
                <div className='px-3'>Tìm sản phẩm " {SearchInput} " </div>
              </div>
              <button onClick={handleSearchOne} className='flex items-center px-2 py-2 w-full hover:bg-slate-50'>
                một vài sản phẩm
              </button>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
export default SearchItems
