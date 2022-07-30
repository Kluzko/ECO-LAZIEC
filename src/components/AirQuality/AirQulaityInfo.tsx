import { h } from 'preact'
import styled from 'styled-components/macro'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Tooltip from 'rc-tooltip'

type AirQualityInfoProps = {
  pm25Value:number
  pm50Value:number
}


// TODO: Make color change for pm values
export const AirQualityInfo = ({pm25Value,pm50Value}:AirQualityInfoProps) => (
  <Tooltip placement="right"  trigger={['click','hover']} overlay={
    <TooltipContainer>
      <p>PM 2.5: {pm25Value}</p>
      <p>PM 5 : {pm50Value}</p>
    </TooltipContainer>
  }>
    <Icon/>
  </Tooltip>
)


const Icon = styled(AiOutlineInfoCircle)`
  &:hover{
    color:${({theme}) => theme.colors.green}
  }
`
const TooltipContainer = styled.div`
  display:flex;
  flex-direction:column;
`