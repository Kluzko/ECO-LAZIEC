import { h, ComponentChildren } from 'preact'
import styled from 'styled-components/macro'
type AirQualityMeterProps = {
  title: string
  children: ComponentChildren
}

export const AirQualityMeter = ({ title, children }: AirQualityMeterProps) => (
  <AirQualityMeterContiainer>
    <p class="title">{title}</p>
    <div>{children}</div>
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
