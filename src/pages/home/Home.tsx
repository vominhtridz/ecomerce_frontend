import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/language"
import { BannerUi } from "./BannerUI/BannerUI"
import { HomeFeaturesUI } from "./HomeFeaturesUi/HomeFeaturesUI"
import ProductsUI from "./ProductsUI/ProductsUI"
import { ProductsRecommendUI } from "./ProductsRecommendUI"
import { useMyContext } from "../../context/context"
import Category from "./Category/Category"
import { LoadingIcon } from "../../images/centerIcons"
const Home: FC = () => {
  const { lang } = useParams()
  const { language, setLanguage, setLangCode } = useMyContext()
  const CategoryHome = language?.center.introduce
  //------------------- Set Language Default--------------------------
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  if (!language) {
    return <div className='text-4xl h-[100vh] flex items-center justify-center w-full uppercase text-blue-400 shadow'>{LoadingIcon}</div>
  }
  //--------------------------- RENDER ELEMENT ------------------------------------

  return (
    <div className=''>
      {language && (
        <center className=' w-full overflow-hidden'>
          <BannerUi />
          <Category />
          <section className='text-center px-36  text-[20px] max-lg:px-2'>{CategoryHome}</section>
          <section className='list-none flex items-center lg:px-16 max-lg:px-2 max-sm:px-2 max-md:px-16 my-16'>
            <HomeFeaturesUI />
          </section>
          <section className='py-6'>
            <ProductsRecommendUI />
          </section>
          <section className='products'>
            <ProductsUI />
          </section>
        </center>
      )}
    </div>
  )
}

export default Home
