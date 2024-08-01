import { manageCategory } from "."
import LeftBtn from "../../../components/button/Home/LeftBtn"
import RightBtn from "../../../components/button/Home/RightBtn"
import { Link } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import { useRef } from "react"

const Category = () => {
  const { langCode } = useMyContext()
  const UlRef = useRef<HTMLUListElement>(null)
  function getCategory() {
    return manageCategory.map((category, index) => {
      return (
        <Link
          to={`/${langCode}${category.route}`}
          key={index}
          className='border w-[11.11%]  hover:border border-gray-200  hover:shadow border-l-0 border-b-0   h-1/2 justify-center items-center flex flex-col rounded-sm px-3'
        >
          <img src={category.image} alt='' className='w-full h-1/2' />
          <p className='text-[13px] pt-2'>{category.name}</p>
        </Link>
      )
    })
  }
  const HandleMoveLeft = () => {
    if (UlRef.current) {
      UlRef.current.style.marginLeft = `0`
    }
  }
  const HandleMoveRight = () => {
    console.log(UlRef.current)
    if (UlRef.current) {
      UlRef.current.style.marginLeft = `-17rem`
    }
  }
  return (
    <div className=' px-10 my-10 p-3  bg-white rounded-sm'>
      <h2 className='px-2 text-2xl text-slate-500 text-left uppercase'>danh mục</h2>
      <div className='relative '>
        <LeftBtn HandleMoveLeft={HandleMoveLeft} />
        <section className='overflow-hidden z-10 '>
          <ul
            ref={UlRef}
            className=' relative list-none w-full h-[26rem] transition duration-500 
           flex flex-col animation  p-4 rouned-sm bg-white  flex-wrap overflow-hidden
        '
          >
            {getCategory()}
          </ul>
        </section>
        <RightBtn HandleMoveRight={HandleMoveRight} />
      </div>
    </div>
  )
}
export default Category
