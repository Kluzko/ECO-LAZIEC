import { h } from 'preact'
import styled from 'styled-components/macro'
import { AirQualityMeter } from './AirQualityMeter'

export const AirQualityInWeek = () => {
  return (
    <AirQualityMeter title="Średnia jakość powietrza dzisiaj:">
      <AirQualityText>Dobra</AirQualityText>
    </AirQualityMeter>
  )
}

const AirQualityText = styled.p`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 24px;
`
