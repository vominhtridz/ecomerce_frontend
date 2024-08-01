export const handleCuccessLabel = (
  text: string,
  duration: number,
  setMessageLabel: (e: string) => void,
  setVisiCuccessLabel: (e: boolean) => void,
) => {
  setMessageLabel(text)
  setVisiCuccessLabel(true)
  setTimeout(() => {
    setVisiCuccessLabel(false)
  }, duration)
}
export const handleFailLabel = (
  text: string,
  duration: number,
  setMessageLabel: (e: string) => void,
  setVisilFailLabel: (e: boolean) => void,
) => {
  setMessageLabel(text)
  setVisilFailLabel(true)
  setTimeout(() => {
    setVisilFailLabel(false)
  }, duration)
}
