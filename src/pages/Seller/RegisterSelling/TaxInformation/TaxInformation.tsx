import BackBtn from "@/components/button/BackBtn"
import AddressBusiness from "./AddressBusiness"
import BusinessType from "./BusinessType"
import EmailAndElecbill from "./EmailAndElecbill"
import TaxCodeNumber from "./TaxCodeNumber"
import { useState } from "react"
import BisinessLicense from "./BisinessLicense"
import NameCompany from "./NameCompany"
import NextBtn from "@/components/button/NextBtn"

const TaxInformation = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [BusinType, setBusinType] = useState<string>("individual")
  const handleBack = () => {}
  const handleNext = () => {}
  return (
    <div className='pt-4 px-14'>
      <div className='pl-14'>
        {/* -----------ROUTE---------- */}
        <BusinessType setBusinType={setBusinType} BusinType={BusinType} />
        {/* -----------OPTION---------- */}
        {BusinType != "individual" ? <NameCompany /> : ""}
        <AddressBusiness />
        <EmailAndElecbill />
        <TaxCodeNumber />
        {BusinType != "individual" ? <BisinessLicense /> : ""}
      </div>

      <div className='flex justify-between pt-8'>
        <BackBtn handleBack={handleBack} />
        <NextBtn handleNext={handleNext} loading={loading} />
      </div>
    </div>
  )
}

export default TaxInformation
