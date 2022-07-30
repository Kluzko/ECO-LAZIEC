import { h } from 'preact'
import styled from 'styled-components/macro'
import { AirQualityInWeek } from './AirQualityInWeek'
import { AirQualityNow } from './AirQualityNow'

export const AirQuality= () => (
  <AirQualityContainer>
    <AirQualityNow />
    <AirQualityInWeek />
  </AirQualityContainer>
)

const AirQualityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  width: 100%;
  height: 300px;
  align-items: center;
  grid-gap: 20px;
  margin-top: 150px;
`
