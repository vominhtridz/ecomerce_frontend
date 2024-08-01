import { BankBoxType } from "@/typescript/UserTypes"
import CCCDInfor from "./CCCDInfor"
import BoxAddNewBank from "./BoxAddNewBank"
import { checkNumberRegex } from "@/components/Regex"
import { handleFailLabel } from "@/components/func/funcVisiLabel"
import { useMyContext } from "@/context/context"
import { FormEvent, memo } from "react"

const BankBox = ({
  handleBack,
  setfullNameErr,
  fullNameErr,
  loadingCCCDINF,
  Next,
  loading,
  setNext,
  setBranchName,
  setNameBank,
  setSTK,
  setUserBankName,
  setCCCDNum,
  setfullName,
  setdisCheckIP,
  setStoreBank,
  setValueIPBank,
  setValueIPBranch,
  branchName,
  nameBank,
  STK,
  userBankName,
  CCCDNum,
  fullName,
  disCheckIP,
  StoreBank,
  ValueIPBank,
  ValueIPBranch,
  handleSend,
}: BankBoxType) => {
  // --------------------------HANDLE BACK CCCD--------------------------------
  const { setMessageLabel, setVisilFailLabel } = useMyContext()
  const handleBackCCCD = () => setNext(false)
  // --------------------------HANDLE SEND --------------------------------

  //--------------------------------HANDLE NEXT TO ADD NEW BANK----------------- -----
  const handleNext = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    if (userBankName == "") {
      handleFailLabel("Tên không được bỏ trống", 2000, setMessageLabel, setVisilFailLabel)
      return
    }
    if (CCCDNum.length < 12) {
      handleFailLabel("Số CCCD không hợp lệ", 2000, setMessageLabel, setVisilFailLabel)
      return
    }
    setNext(true)
  }
  console.log("CHECK RERENDER BANK")
  // --------------------------CHANGE EVENT --------------------------------
  const ChangeName = (value: string) => setUserBankName(value)
  const ChangeCCCDNum = (value: string) => {
    if (value === "") {
      setCCCDNum("")
      return
    }
    if (!checkNumberRegex.test(value)) return
    setCCCDNum(value)
  }
  //---------------------------------------RENDER ELEMENT-------------------
  return (
    <div className='fixed z-30 left-0 right-0 top-0 bottom-0'>
      {!Next ? (
        <CCCDInfor
          ChangeCCCDNum={ChangeCCCDNum}
          CCCDNum={CCCDNum}
          ChangeName={ChangeName}
          userBankName={userBankName}
          loading={loadingCCCDINF}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      ) : (
        <BoxAddNewBank
          setfullNameErr={setfullNameErr}
          fullNameErr={fullNameErr}
          setdisCheckIP={setdisCheckIP}
          setStoreBank={setStoreBank}
          setValueIPBank={setValueIPBank}
          setValueIPBranch={setValueIPBranch}
          StoreBank={StoreBank}
          ValueIPBank={ValueIPBank}
          ValueIPBranch={ValueIPBranch}
          visiAddbank={Next}
          handleBackCCCD={handleBackCCCD}
          disCheckIP={disCheckIP}
          STK={STK}
          setNameBank={setNameBank}
          setSTK={setSTK}
          setfullName={setfullName}
          setBranchName={setBranchName}
          fullName={fullName}
          nameBank={nameBank}
          branchName={branchName}
          loading={loading}
          handleSend={handleSend}
          handleBack={handleBack}
        />
      )}
    </div>
  )
}

export default BankBox
