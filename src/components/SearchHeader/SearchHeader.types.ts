import { ReactNode } from 'react'

export interface IProps {
  children?: ReactNode
  style: any
  inputValue: string | string[]
  onUpdateValue: () => void
  onSearch: () => void
  searchVarianList: string[]
}
