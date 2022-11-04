import { IFinalResult } from 'models/common'
import { LocalStorageService } from 'services/localStorageService'

export const decodeEntities = (str: string) => {
  const textArea = document.createElement('textarea')
  textArea.innerHTML = str
  return textArea.value
}

export const saveUserScore = (finalResult: Omit<IFinalResult, 'date'>) => {
  const dateObj = new Date()
  const month = dateObj.getUTCMonth() + 1
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()
  LocalStorageService.setScoreStory({ ...finalResult, date: `${year}/${month}/${day}` })
}
