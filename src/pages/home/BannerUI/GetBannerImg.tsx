import { useEffect, useState } from "react"
import { BannerImgs } from "../../../images/images"
import { bannerType } from "../../../typescript/HomeType"

export const GetBannerImg = () => {
  const [increment, setIncrement] = useState<number>(0)

  useEffect(() => {
    const RenderImg2s = setInterval(() => {
      const LengOfBannerImgs = BannerImgs.length - 1
      setIncrement(prev => (prev === -100 * LengOfBannerImgs ? 0 : prev - 100))
    }, 3000)
    return () => clearInterval(RenderImg2s)
  }, [])
  return BannerImgs.map((banner: bannerType, index: number) => {
    const conditionStatement = {
      marginLeft: 0 === index ? `${increment}%` : "",
    }
    return (
      <img
        key={index}
        src={banner.img}
        style={conditionStatement}
        className={` w-full  object-cover transition-all scroll-smooth duration-500`}
        id='BannerHomeImg'
        alt='banner'
      />
    )
  })
}
