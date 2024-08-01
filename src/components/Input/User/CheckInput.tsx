interface CheckInputType {
  disable: boolean
  id: string
}
const CheckInput = ({ disable, id }: CheckInputType) => {
  return <input required type='checkbox' id={id} className={`${disable ? "text-slate-400" : "text-blue-500"}`} disabled={disable} />
}

export default CheckInput
