import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowIcon } from 'components/icons'
import { IDropDownList, IUniqueId } from 'models/common'
import { Box } from '@mui/material'
import { Container, List, Item, Placeholder, Select } from './styled'
import { ICategory } from 'models/categories'
import { useAppDispatch } from 'store/hooks'
import { chooseCategory } from 'store/slices/categoriesSlice'

type IProps = {
  list?: IDropDownList
  placeholder?: string
  defaultValue?: string
}

const Dropdown = ({ list = [], placeholder = 'select', defaultValue = '' }: IProps) => {
  const [value, setValue] = useState<IUniqueId>(defaultValue)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const dispatch = useAppDispatch()

  const classes = useMemo(
    () => ({
      select: isOpenDropdown ? 'active' : !isOpenDropdown && value ? 'focus' : '',
      dropdown: isOpenDropdown ? 'dropdown active' : 'dropdown',
      arrow: isOpenDropdown ? 'arrow active' : 'dropdown',
    }),
    [isOpenDropdown, value],
  )

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    setIsOpenDropdown((prev) => !prev)
  }
  const listener = useCallback(() => {
    setIsOpenDropdown((prev) => (prev ? !prev : prev))
  }, [])

  useEffect(() => {
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [listener])

  const handleSelect = (category: ICategory) => {
    setValue(category.name)
    setIsOpenDropdown(false)
    dispatch(chooseCategory(category))
  }

  return (
    <Container>
      <Select className={classes.select} onClick={handleClick}>
        {!value ? <Placeholder>{placeholder}</Placeholder> : <Box>{value}</Box>}
        <Box className={classes.arrow}>
          <ArrowIcon />
        </Box>
      </Select>
      <List
        className={classes.dropdown}
        onClick={(event: MouseEvent) => {
          event.stopPropagation()
          event.currentTarget.scrollTo(0, 0)
        }}
      >
        {!list.length && <Box>Loading...</Box>}
        {list.map((category) => (
          <Item key={category.id} onClick={() => handleSelect(category)}>
            <p>{category.name}</p>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default Dropdown
