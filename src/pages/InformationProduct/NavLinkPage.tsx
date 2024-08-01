import { Link } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { NoSlashRight } from "../../images/centerIcons"

const NavLinkPage = () => {
  const { langCode } = useMyContext()
  return (
    <nav className='flex my-4 items-center  text-sm text-green-600  py-1'>
      <Link to={`/${langCode}`} className='hover:underline'>
        Sango
      </Link>
      <p className='px-2 text-[11px] text-black'>{NoSlashRight}</p>
      <Link to={`/${langCode}`} className='hover:underline'>
        nhà cửa & đời sống
      </Link>
      <p className='px-2 text-[11px] text-black'>{NoSlashRight}</p>
      <Link to={`/${langCode}`} className='hover:underline'>
        Chăm sóc nhà cửa và giặt ủi
      </Link>
      <p className='px-2 text-[11px] text-black'>{NoSlashRight}</p>
      <Link to={`/${langCode}`} className='hover:underline'>
        Móc quần áo
      </Link>
    </nav>
  )
}
export default NavLinkPage
