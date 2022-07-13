import { h } from 'preact'
import { ToggleTheme } from '../buttons'
import { Logo } from './Logo'
import * as styled from './styled'

export const Nav = () => (
  <styled.Nav>
    <Logo />
    <styled.ThemeContainer>
      <ToggleTheme />
    </styled.ThemeContainer>
  </styled.Nav>
)
