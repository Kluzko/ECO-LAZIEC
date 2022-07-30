import { h } from 'preact'
import styled from 'styled-components/macro'
import { AirQualityMeter } from './AirQualityMeter'
import { AirQualityInfo } from './AirQulaityInfo'

export const AirQualityInWeek = () => {
  return (
    <AirQualityMeter title="Średnia jakość powietrza dzisiaj:">
      <AirQualityText>Dobra</AirQualityText>
      <AirQualityInfo pm25Value={5.3} pm50Value={23}/>
    </AirQualityMeter>
  )
}

const AirQualityText = styled.p`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 24px;
  
`
