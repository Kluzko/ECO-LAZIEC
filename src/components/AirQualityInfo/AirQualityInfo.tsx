import { h } from 'preact'
import styled from 'styled-components/macro'
import { AirQualityInWeek } from './AirQualityInWeek'
import { AirQualityNow } from './AirQualityNow'

export const AirQualityInfo = () => (
  <AirQualityInfoContainer>
    <AirQualityNow />
    <AirQualityInWeek />
  </AirQualityInfoContainer>
)

const AirQualityInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  width: 100%;
  height: 300px;
  align-items: center;
  grid-gap: 20px;
  margin-top: 150px;
`
