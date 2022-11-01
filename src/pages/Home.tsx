import { useEffect } from 'react'
import { Categories } from 'containers'
import { useAppDispatch } from 'store/hooks'
import { clearCategoryState, getCategoriesAsync } from 'store/slices/categoriesSlice'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategoriesAsync())

    return () => {
      dispatch(clearCategoryState())
    }
  }, [dispatch])

  return <Categories />
}

export default Home
