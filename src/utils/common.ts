export const decodeEntities = (str: string) => {
  const textArea = document.createElement('textarea')
  textArea.innerHTML = str
  return textArea.value
}
