import { h } from 'preact'
import styled from 'styled-components/macro'
import { AirQualityMeter } from './AirQualityMeter'
import { AirQualityInfo } from './AirQulaityInfo'

export const AirQualityNow = () => {
  return (
    <AirQualityMeter title="Aktualny stan powietrza:">
      <AirQualityText>Bardzo dobry</AirQualityText>
      <AirQualityInfo pm25Value={5.3} pm50Value={23}/>
    </AirQualityMeter>
  )
}

const AirQualityText = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
`
