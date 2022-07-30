import { h } from 'preact'
import styled from 'styled-components/macro'

export const Footer = () => (
  <FooterContainer>
    <p>
      Design and coded by <span>Jakub Kluźniak</span>
    </p>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: ${({ theme }) => theme.colors.green};
  p {
    color: ${({ theme }) => theme.colors.basic};
  }

  span {
    font-weight: bold;
  }
`
