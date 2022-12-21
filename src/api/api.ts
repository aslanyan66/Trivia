export const QUESTIONS_API = 'api.php?amount=10&category='
export const CATEGORIES_API = 'api_category.php'
export const COUNT_CATEGORY_QUESTIONS_API = 'api_count.php?category='

export const config =
  process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL : 'https://opentdb.com/'
