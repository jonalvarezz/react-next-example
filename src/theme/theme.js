import { createContext } from 'react'

export const defaultTheme = {
  primary: 'tomato',
  lightGray: '#eee',
  gray: '#ccc',
  darkGray: '#333'
}

const ThemeContext = createContext(defaultTheme)

export default ThemeContext
