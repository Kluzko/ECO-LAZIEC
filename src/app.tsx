import styled from 'styled-components/macro'
import { AirQuality } from './components/AirQuality/AirQuality'
import { Footer } from './components/footer/footer'
import { Nav } from './components/Nav/Nav'

export function App() {
  return (
    <AppContainer>
      <Nav />
      <AirQuality />
      <Footer />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.basic};
  background-color: ${({ theme }) => theme.colors.background};
`
