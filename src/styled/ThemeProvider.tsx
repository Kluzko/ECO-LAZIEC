import { ComponentChildren, createContext } from 'preact'
import { useState } from 'preact/hooks'

import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro'
import { lightTheme, darkTheme } from './themes'

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
})

type ChildrenProps = {
  children: ComponentChildren
}

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [dark, setDark] = useState(true)
  const toggleTheme = () => {
    setDark(!dark)
  }
  return (
    <ThemeContext.Provider value={{ isDarkTheme: dark, toggleTheme }}>
      <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
