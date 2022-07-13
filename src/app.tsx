import styled from 'styled-components/macro'
import { Nav } from './components/Nav/Nav'

export function App() {
  return (
    <AppContainer>
      <Nav />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.basic};
  background-color: ${({ theme }) => theme.colors.background};
`
