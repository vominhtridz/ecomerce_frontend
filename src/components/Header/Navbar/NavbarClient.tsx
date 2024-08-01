import { Link, useLocation } from "react-router-dom"
import { useMyContext } from "../../../context/context"
export function NavBarClient() {
  const { language } = useMyContext()
  const path = useLocation().pathname
  // ------------------------ HANDLE RENDER LANGUAGE -----------------------------
  return language?.header.navbar.map((navbar: { route: string; title: string }, index: number) => {
    const checkPath =
      path === navbar.route ? " transition duration-600 border-b-[3.5px] border-solid border-[#66a92f] " : ""
    const pathRoute = path == navbar.route ? "text-orange-500" : ""
    return (
      <li
        key={index}
        className={`${checkPath} p-2 font-semibold text-[17px] max-lg:w-fulltext-slate-700  whitespace-nowrap tracking-tighter `}
      >
        <Link
          to={navbar.route}
          className={`${pathRoute} tracking-tighter hover:text-green-500  text-slate-500 lg:text-base max-lg:text-sm`}
        >
          {navbar.title}
        </Link>
      </li>
    )
  })
}
