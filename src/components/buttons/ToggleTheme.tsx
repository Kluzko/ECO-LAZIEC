import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { TbBulb, TbBulbOff } from 'react-icons/tb'

import { ThemeContext } from '../../styled'
import { ThemeButton, DarkMode, LightMode } from './styled'

export const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <ThemeButton onClick={toggleTheme}>
      {isDarkTheme ? (
        <DarkMode aria-label="Dark mode">
          <TbBulbOff />
        </DarkMode>
      ) : (
        <LightMode aria-label="Light mode">
          <TbBulb />
        </LightMode>
      )}
    </ThemeButton>
  )
}
