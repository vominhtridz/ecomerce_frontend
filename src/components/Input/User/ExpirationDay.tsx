interface ExpirationDayType {
  valueday: string
  ChangeValueDay: (e: string) => void
}
const ExpirationDay = ({ valueday, ChangeValueDay }: ExpirationDayType) => {
  return (
    <input
      id='expDay'
      type='text'
      className={` px-2 py-2 text-[12px] outline-blue-500  text-black border  rounded-sm bg-white w-full`}
      value={valueday}
      placeholder='Ngày hết hạn (MM/YY) '
      onChange={e => ChangeValueDay(e.target.value)}
    />
  )
}

export default ExpirationDay
