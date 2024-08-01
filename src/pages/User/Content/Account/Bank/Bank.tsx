import { useMyContext } from "../../../../../context/context"
import AddCreditCard from "../../../../../components/button/AddCreditCard"
import AddBankCard from "../../../../../components/button/AddBankCard"
import { FormEvent, useEffect, useState } from "react"
import LoadingPage from "@/components/Loading/Loading"
import BankBox from "./AddBankBox/BankBox"
import CardBox from "@/pages/User/Content/Account/Bank/CardBox"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { GetUserBank, GetUserCard, RemoveUserBank, RemoveUserCard, StoreUserBank, StoreUserCard } from "@/apis/apis"
import BankAccounts from "./BankAccounts/BankAccounts"
import CardAccounts from "./CardAccounts/CardAccounts"
export const PageBank = () => {
  const { dataUser, setMessageLabel, setVisiCuccessLabel, setVisilFailLabel } = useMyContext()
  const [showAddCart, setShowAddCart] = useState<boolean>(false)
  const [showBankACC, setShowBankACC] = useState<boolean>(false)
  const [UserBank, setUserBank] = useState<object[]>()
  const [UserCard, setUserCard] = useState<object[]>()
  const [loading, setLoading] = useState<boolean>(false)
  //------------------------------------ CARD BOX STATE---------------------------------
  const [cardNum, setCardNum] = useState<string>("")
  const [valueDay, setValueDay] = useState<string>("")
  const [codeCvv, setCodeCvv] = useState<string>("")
  const [CardName, setCardName] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [primaryCode, setPrimaryCode] = useState<string>("")
  const [cardErr, setCardErr] = useState<boolean>(false)
  const [codeCvvErr, setCodeCvvErr] = useState<boolean>(false)
  const [loadingCard, setloadingCard] = useState<boolean>(false)
  const [NameErr, setNameErr] = useState<boolean>(false)
  const [primaryPostErr, setprimaryPostErr] = useState<boolean>(false)

  //---------------------------------- BANK BOX STATE-------------------------
  const [loadingCCCDINF, setloadingCCCDINF] = useState<boolean>(false)
  const [loadingBank, setLoadingBank] = useState<boolean>(false)
  const [Next, setNext] = useState<boolean>(false)
  const [branchName, setBranchName] = useState<string>("")
  const [nameBank, setNameBank] = useState<string>("")
  const [userBankName, setUserBankName] = useState<string>("")
  const [CCCDNum, setCCCDNum] = useState<string>("")
  const [fullName, setfullName] = useState<string>("")
  const [disCheckIP, setdisCheckIP] = useState<boolean>(false)
  const [fullNameErr, setfullNameErr] = useState<boolean>(false)
  const [StoreBank, setStoreBank] = useState<string[]>([])
  const [ValueIPBank, setValueIPBank] = useState<string>("")
  const [ValueIPBranch, setValueIPBranch] = useState<string>("")
  const [STK, setSTK] = useState<string>("")
  useEffect(() => {
    GetUserBank({ userid: dataUser?.userid as any })
      .then(res => {
        setUserBank(res.data)
      })
      .catch(err => console.log(err))
    GetUserCard({ userid: dataUser?.userid as any })
      .then(res => {
        setUserCard(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  console.log("check rerender: -")
  //--------------------------HANDLE STORE CARD ----------------------------
  const HandleStoreCard = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    if (!checkMissValue()) return
    const dataCard = {
      cardnumber: cardNum,
      exp_day: valueDay,
      codecvv: codeCvv,
      first_lastname: CardName,
      address: address,
      primaryCode: primaryCode,
      userid: dataUser?.userid as number,
    }
    setloadingCard(true)
    StoreUserCard(dataCard)
      .then(res => {
        console.log(res)
        const logCuccess = res ? res.data.message : "Lưu thành công"
        setloadingCard(false)
        handleBackCard()
        setUserCard(res.data.data)
        handleCuccessLabel(logCuccess, 600, setMessageLabel, setVisiCuccessLabel)
        setShowAddCart(false)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setloadingCard(false)
        handleFailLabel(logErr, 600, setMessageLabel, setVisilFailLabel)
      })
  }
  //--------------------------HANDLE STORE BANK ----------------------------

  const handleStoreBank = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()

    if (nameBank === "") {
      handleFailLabel("Chưa chọn tên ngân hàng", 600, setMessageLabel, setVisilFailLabel)
      return
    }
    if (branchName === "") {
      handleFailLabel("Chưa chọn tên chi nhánh", 600, setMessageLabel, setVisilFailLabel)
      return
    }
    if (STK === "") {
      handleFailLabel("Số tài khoản không hợp lệ", 600, setMessageLabel, setVisilFailLabel)
      return
    }
    if (fullName === "") {
      handleFailLabel("yêu cầu Tên đầy đủ", 600, setMessageLabel, setVisilFailLabel)
      return
    }
    setLoadingBank(true)
    const dataBank = {
      userid: dataUser?.userid as number,
      defaultname: userBankName,
      namebank: nameBank,
      cid: CCCDNum,
      namebranch: branchName,
      accountnumber: STK,
      setdefault: 1,
      fullname: fullName,
    }
    StoreUserBank(dataBank)
      .then(res => {
        console.log(res)
        const logCuccess = res ? res.data.message : "Lưu thành công"
        handleCuccessLabel(logCuccess, 600, setMessageLabel, setVisiCuccessLabel)
        setShowBankACC(false)
        handleBackBank()
        setUserBank(res.data.data)
        setLoadingBank(false)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoadingBank(false)
        handleFailLabel(logErr, 600, setMessageLabel, setVisilFailLabel)
      })
  }
  // -------------------------------- HANDLE BACK USER CARD AND USER BANK----------------------------
  const handleBackCard = () => {
    setShowAddCart(false)
    setCardNum("")
    setValueDay("")
    setCodeCvv("")
    setCardName("")
    setAddress("")
    setPrimaryCode("")
    setCardErr(false)
    setCodeCvvErr(false)
    setloadingCard(false)
    setNameErr(false)
    setprimaryPostErr(false)
  }
  const handleBackBank = () => {
    setShowBankACC(false)
    setloadingCCCDINF(false)
    setLoadingBank(false)
    setNext(false)
    setBranchName("")
    setNameBank("")
    setSTK("")
    setUserBankName("")
    setCCCDNum("")
    setfullName("")
    setdisCheckIP(false)
    setStoreBank([])
    setValueIPBank("")
    setValueIPBranch("")
    setNext(false)
  }
  // --------------------------- HANDLE SHOW CARD BOX , BANK BOX --------------------------
  const handleShowCard = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowAddCart(true)
    }, 500)
  }
  const HandleShowBank = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowBankACC(true)
    }, 500)
  }
  const checkMissValue = () => {
    if (cardNum == "" || codeCvv == "" || valueDay == "" || address == "" || primaryCode == "") {
      setCardErr(true)
      setCodeCvvErr(true)
      setNameErr(true)
      setprimaryPostErr(true)
      return false
    }
    return true
  }
  const RemoveBankACC = (id: number, userid: number) =>
    RemoveUserBank({ bankid: id, userid: userid }).then(res => {
      setUserBank(res.data)
    })
  const RemoveCardACC = (id: number, userid: number) => RemoveUserCard({ cardid: id, userid: userid }).then(res => setUserCard(res.data))
  //--------------------------RENDER ELEMENT ----------------------------
  return (
    <section className=' bg-white w-full p-4'>
      <nav className='flex justify-between px-2  border-b py-2  border-slate-400'>
        <h2 className=' text-black text-lg'>Thẻ Tín Dụng/Ghi Nợ</h2>
        {/*------------------BUTTON SHOW ADD CREDIT CARD--------------- */}
        <AddCreditCard handleAddCreditCart={handleShowCard} />
      </nav>
      {UserCard && UserCard.length > 0 ? (
        <CardAccounts RemoveCardACC={RemoveCardACC} data={UserCard} />
      ) : (
        <p className='py-20 uppercase flex items-center justify-center'>Chưa có thẻ nào.</p>
      )}
      {/*------------------------ SHOW ADD CARD ------------------------*/}
      {showAddCart && (
        <CardBox
          handleSend={HandleStoreCard}
          loading={loadingCard}
          cardNum={cardNum}
          valueDay={valueDay}
          codeCvv={codeCvv}
          Name={CardName}
          address={address}
          primaryCode={primaryCode}
          cardErr={cardErr}
          setCardNum={setCardNum}
          setValueDay={setValueDay}
          setCodeCvv={setCodeCvv}
          setName={setCardName}
          setAddress={setAddress}
          setPrimaryCode={setPrimaryCode}
          setCardErr={setCardErr}
          setCodeCvvErr={setCodeCvvErr}
          setNameErr={setNameErr}
          setprimaryPostErr={setprimaryPostErr}
          codeCvvErr={codeCvvErr}
          NameErr={NameErr}
          primaryPostErr={primaryPostErr}
          handleBack={handleBackCard}
        />
      )}
      {/*------------------------ SHOW CREDIT CARD ------------------------*/}
      {showBankACC && (
        <BankBox
          setfullNameErr={setfullNameErr}
          fullNameErr={fullNameErr}
          handleSend={handleStoreBank}
          handleBack={handleBackBank}
          loadingCCCDINF={loadingCCCDINF}
          loading={loadingBank}
          Next={Next}
          setloadingCCCDINF={setloadingCCCDINF}
          setNext={setNext}
          setBranchName={setBranchName}
          setNameBank={setNameBank}
          setSTK={setSTK}
          setUserBankName={setUserBankName}
          setCCCDNum={setCCCDNum}
          setfullName={setfullName}
          setdisCheckIP={setdisCheckIP}
          setStoreBank={setStoreBank}
          setValueIPBank={setValueIPBank}
          setValueIPBranch={setValueIPBranch}
          branchName={branchName}
          nameBank={nameBank}
          STK={STK}
          userBankName={userBankName}
          CCCDNum={CCCDNum}
          fullName={fullName}
          disCheckIP={disCheckIP}
          StoreBank={StoreBank}
          ValueIPBank={ValueIPBank}
          ValueIPBranch={ValueIPBranch}
        />
      )}
      <div className=' border-b border-slate-400 mt-10  pb-3 '>
        <nav className='flex items-center justify-between px-2'>
          <p>Tài Khoản Ngân Hàng Của Tôi</p>
          {/*------------------BUTTON SHOW ADD NEW BANK--------------- */}
          <AddBankCard handleAddBank={HandleShowBank} />
        </nav>
      </div>
      {UserBank && UserBank.length > 0 ? (
        <BankAccounts handleRemove={RemoveBankACC} data={UserBank} />
      ) : (
        <p className='py-20 uppercase flex items-center justify-center'>Chưa có tài khoản NGÂN HÀNG.</p>
      )}
      {/*------------------------ Loading ------------------------*/}
      {loading && <LoadingPage />}
    </section>
  )
}
export default PageBank
