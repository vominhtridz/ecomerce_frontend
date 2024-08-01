import { AutoChatIcon, ChatIcon, QuestionChatIcon } from "@/images/centerIcons"
import React from "react"
const options = [
  {
    label: "Tổng chat",
    count: 0,
  },
  {
    label: "Tỉ lệ phản hồi",
    count: 0,
  },
  {
    label: "Thời gian phản hồi",
    count: 0,
  },
]
const ChatBoxOption = [
  {
    icon: AutoChatIcon,
    title: "Tự động chat",
    text: "Thiết lập",
    more: "Tự động chat với khách hàng",
  },
  {
    icon: ChatIcon,
    title: "Chat nhanh",
    text: "Thiết lập",
    more: "Qua mẫu tin nhẵn thiết lập sẵn giúp việc khách hàng nắm thông tin nhanh.",
  },
  {
    icon: QuestionChatIcon,
    title: "Trả lời Chat có sẵn",
    text: "Thiết lập",
    more: "Tự động gửi thẻ câu hỏi thường gặp giúp khách hàng trả lời các câu hỏi thường gặp",
  },
]
const ManageChat = () => {
  const getOpiton = options.map((option, index) => (
    <div className='text-center w-1/3' key={index}>
      <label htmlFor='' className='text-[15px] py-2 font-light text-slate-700'>
        {option.label}
      </label>
      <p className='text-lg font-semibold text-slate-800'>{option.count}</p>
    </div>
  ))
  const getChatBoxOption = ChatBoxOption.map((option, index) => (
    <div className='text-center  w-1/3 mx-4 border border-gray-300 rounded-md px-4 pb-3' key={index}>
      <div className='flex items-center  h-[136px]'>
        <p className='text-4xl font-semibold text-green-600'>{option.icon}</p>
        <label htmlFor='' className='text-[18px] text-left py-2 font-light ml-6 text-slate-700'>
          <p className='leading-6'>{option.title}</p>
          <p className='text-[12px] text-slate-700 leading-4 pt-0.5'>{option.more}</p>
        </label>
      </div>
      <button className='flex items-center  justify-center w-full text-white rounded-sm text-sm py-1.5 bg-green-500'>{option.text}</button>
    </div>
  ))
  return (
    <div className=''>
      <div className='mb-10'>
        <h2 className='text-lg'>Quản lý Chat</h2>
        <div className='flex'>{getOpiton}</div>
      </div>
      <h2 className='text-lg'>Bot Chat Tự Động</h2>
      <div className='flex mt-6 mb-10'>{getChatBoxOption}</div>
    </div>
  )
}

export default ManageChat
