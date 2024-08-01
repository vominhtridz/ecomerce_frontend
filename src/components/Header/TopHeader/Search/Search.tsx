import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"
import { SearchIcon } from "../../../../images/centerIcons"
import SearchItems from "./SearchItems"
const Search = () => {
  const [SearchInput, setSearchInput] = useState<string>("")
  const [checkFocus, setCheckFocus] = useState<boolean>(false)
  //--------------------------------- HANDLE SEARCH -----------------------------
  const HandleSearch = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello")
  }
  const ChangeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)
  const handleBlur = () => setCheckFocus(true)
  const handleFocus = () => setCheckFocus(true)
  //--------------------------------- RENDER ELEMETN-----------------------------
  return (
    <form onSubmit={HandleSearch} className='w-full lg:pb-10'>
      <div className='relative w-full'>
        <SearchItems
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          ChangeSearch={ChangeSearch}
          SearchInput={SearchInput}
          checkFocus={checkFocus}
        />
        <button
          type='submit'
          className='absolute bottom-0 right-0 top-1 bg-green-500 px-6 py-[18.5px]   rounded-tr-sm rounded-br-sm text-white flex items-center justify-center   h-full text-2xl '
          onClick={HandleSearch}
        >
          {SearchIcon}
        </button>
      </div>
    </form>
  )
}
export default Search
