import { h } from 'preact'
import styled from 'styled-components/macro'
import { AirQualityMeter } from './AirQualityMeter'

export const AirQualityNow = () => {
  return (
    <AirQualityMeter title="Aktualny stan powietrza:">
      <AirQualityText>Bardzo dobry</AirQualityText>
    </AirQualityMeter>
  )
}

const AirQualityText = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
`
