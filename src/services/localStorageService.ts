import { IFinalResult } from 'models/common'

export class LocalStorageService {
  static getScoreStory() {
    return localStorage.getItem('scoreStory')
  }

  static setScoreStory(finalResult: IFinalResult) {
    const scores = LocalStorageService.getScoreStory() || '{}'
    const currentScores = JSON.parse(scores)
    const playedCount = Object.keys(currentScores).length.toString()
    currentScores[playedCount] = finalResult

    try {
      localStorage.setItem('scoreStory', JSON.stringify(currentScores))
    } catch (error) {
      LocalStorageService.clearStorage();
      console.log(error)
    }
    return localStorage
  }

  // CLEAR STORAGE
  static clearStorage() {
    localStorage.clear()
  }
}
