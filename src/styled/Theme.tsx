import { ComponentChildren } from 'preact'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    yellow: '#FFF000',
  },
}

type ChildrenProps = {
  children: ComponentChildren
}

export const Theme = ({ children }: ChildrenProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
