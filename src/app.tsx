import styled from 'styled-components/macro'
import { AirQualityInfo } from './components/AirQualityInfo/AirQualityInfo'
import { Nav } from './components/Nav/Nav'

export function App() {
  return (
    <AppContainer>
      <Nav />
      <AirQualityInfo />
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
