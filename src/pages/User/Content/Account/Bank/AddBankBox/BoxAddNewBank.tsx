import InputCustom from "@/components/Input/InputCustom"
import CheckInput from "@/components/Input/User/CheckInput"
import BackBtn from "@/components/button/BackBtn"
import SendBtn from "@/components/button/SendBtn"
import { ArrowLeft, DownIcon } from "@/images/centerIcons"
import { BoxAddNewBankType } from "@/typescript/UserTypes"
import { FC, useState } from "react"
import { ListBanks } from "."
import { VietnameseRegex, checkUPCRegex } from "@/components/Regex"

const BoxAddNewBank: FC<BoxAddNewBankType> = ({
  setStoreBank,
  setfullNameErr,
  fullNameErr,
  StoreBank,
  ValueIPBank,
  handleBackCCCD,
  disCheckIP,
  STK,
  setNameBank,
  setSTK,
  setfullName,
  setBranchName,
  fullName,
  nameBank,
  branchName,
  loading,
  handleSend,
  handleBack,
}) => {
  const [showListBank, setShowListBank] = useState<boolean>(false)
  const [ShowListBranch, setShowListBranch] = useState<boolean>(false)
  //--------------------------------HANDLE STORE BANK-------------------------
  const handleStoreBank = (e: { branches: string[]; bank: string }) => {
    setStoreBank(e.branches)
    setNameBank(e.bank)
    setShowListBank(false)
  }
  //--------------------------------HANDLE STORE BRANCH-------------------------
  const handleStoreBranch = (e: string) => {
    setBranchName(e)
    setShowListBranch(false)
  }
  //---------------------------------GET LIST BANK-------------------------
  const getListBank = ListBanks.map((item, index) => (
    <div
      key={index}
      className={`${ValueIPBank == item.bank ? "bg-green-500 text-white" : ""}  hover:bg-green-500 hover:text-white cursor-default text-sm items-left px-4 py-1`}
      onClick={() => handleStoreBank(item)}
    >
      {item.bank}
    </div>
  ))
  //---------------------------------GET LIST BRANCH-------------------------

  const getListBranch = StoreBank.map((item: string, index: number) => (
    <div
      key={index}
      onClick={() => handleStoreBranch(item)}
      className=' hover:bg-green-500 hover:text-white cursor-default text-sm items-left px-4 py-1'
    >
      {item}
    </div>
  ))
  //---------------------------------HANDLE TRANSFROM STATE -------------------------
  const handleShowListBank = () => setShowListBank(!showListBank)
  const handleShowListBranch = () => setShowListBranch(!ShowListBranch)
  //---------------------------------CHANGE EVENT -------------------------
  const ChangeNameBank = (value: string) => setNameBank(value)
  const ChangeSTK = (value: string) => setSTK(value)
  const ChangeFullName = (value: string) => {
    if (!VietnameseRegex.test(value) || !checkUPCRegex.test(value)) {
      setfullNameErr(true)
      if (value == "") setfullName("")
      return
    } else {
      setfullNameErr(false)
      setfullName(value)
    }
  }
  const ChangeBranchName = (value: string) => setBranchName(value)
  return (
    <div className='absolute  h-[30rem]  top-12  left-1/3 w-[30rem] bg-white shadow rounded-sm px-4 py-2 overflow-y-auto border border-gray-200'>
      <div className='flex items-center'>
        <button className=' mr-3 text-xl text-gray-500' onClick={handleBackCCCD}>
          {ArrowLeft}
        </button>
        <h2 className='py-4 px-1 text-xl'>Thêm Tài Khoản Ngân Hàng</h2>
      </div>
      <form action='' onSubmit={handleSend} className=''>
        <div className='relative my-3.5'>
          <InputCustom
            required={true}
            placeHolder='Tên ngân hàng'
            handleClick={handleShowListBank}
            value={nameBank}
            changeValue={ChangeNameBank}
            cursor='cursor-pointer'
          />
          <p className='absolute top-3 right-2 text-black text-base'>{DownIcon}</p>
          {showListBank && (
            <div className='h-[14rem] overflow-y-scroll absolute top-full bg-white shadow-md rounded-sm z-50 left-0 right-0'>
              {getListBank}
            </div>
          )}
          <p className={`text-[10px] absolute left-0.5 top-[-8px] z-20 px-1 text-black bg-white`}>Tên ngân hàng </p>
        </div>
        <div className='relative my-3.5'>
          <p className='absolute top-3 right-2 text-black text-base'>{DownIcon}</p>
          <InputCustom
            placeHolder='Tên chi nhánh'
            value={branchName}
            required={true}
            handleClick={handleShowListBranch}
            changeValue={ChangeBranchName}
            cursor='cursor-pointer'
          />
          <p className={`text-[10px] absolute left-0.5 top-[-8px] z-20 px-1 text-black bg-white`}>Tên chi nhánh </p>
          {ShowListBranch && (
            <div className='h-[14rem] z-50 overflow-y-scroll absolute top-full bg-white shadow-md rounded-sm  left-0 right-0'>
              {getListBranch}
            </div>
          )}
        </div>
        <div className='relative my-3.5'>
          <InputCustom required={true} placeHolder='Số tài khoản' value={STK} changeValue={ChangeSTK} length={13} />
          <p className={`text-[10px] absolute left-0.5 top-[-8px] z-20 px-1 text-black bg-white`}>Số tài khoản </p>
        </div>
        <div className='relative my-3.5'>
          <InputCustom
            required={true}
            error={fullNameErr}
            placeHolder='Tên đầy đủ (viết in hoa, không dấu)'
            value={fullName}
            changeValue={ChangeFullName}
          />
          <p className={` ${fullNameErr ? "text-red-500" : ""} text-[10px] absolute left-0.5 top-[-8px] z-20 px-1 text-black bg-white`}>
            Tên đầy đủ{" "}
          </p>
          {fullNameErr && (
            <p className={`${fullNameErr ? "text-red-500" : ""} text-[10px] text-black`}>Tên phải viết HOA và KHÔNG CÓ DẤU</p>
          )}
        </div>

        <div className='flex items-center '>
          <CheckInput disable={disCheckIP} id='valueDefault' />
          <label htmlFor='valueDefault' className='px-2 text-[12px] text-slate-700'>
            Đặt làm mặc định
          </label>
        </div>
        <div className='flex pt-28 justify-end'>
          <BackBtn handleBack={handleBack} />
          <SendBtn loading={loading} handleSend={handleSend} />
        </div>
      </form>
    </div>
  )
}

export default BoxAddNewBank
