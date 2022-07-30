import { h, FunctionComponent } from 'preact'
import styled from 'styled-components/macro'


export const AirQualityMeter:FunctionComponent<{title:string}> = ({ title, children }) => (
  <AirQualityMeterContiainer>
    <p class="title">{title}</p>
    <AirQualityInfoContiainer>{children}</AirQualityInfoContiainer>
  </AirQualityMeterContiainer>
)

const AirQualityMeterContiainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .title {
    color: ${({ theme }) => theme.colors.basic};
    font-size: 22px;
  }
`

const AirQualityInfoContiainer = styled.div`
  margin-top:10px ;
  display: flex;
  flex-direction: row;
`