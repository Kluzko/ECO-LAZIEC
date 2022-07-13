import styled from 'styled-components/macro'

export const ThemeButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: bottom;
  background-color: ${({ theme }) => theme.colors.basic};
  border-radius: 5px;
  cursor: pointer;
`

export const LightMode = styled.i`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 25px;
`
export const DarkMode = styled.i`
  color: ${({ theme }) => theme.colors.background};
  font-size: 25px;
`
