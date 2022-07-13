import styled from 'styled-components/macro'

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  span,
  h1 {
    font-weight: 600;
    font-size: 30px;
  }
  h1 > span {
    color: ${({ theme }) => theme.colors.green};
  }
`
