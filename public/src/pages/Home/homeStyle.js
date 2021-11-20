import styled from '@emotion/styled'

export const Container = styled.main`
  width: 420px;
  max-width: 100%;

  h1 {
    margin: 0;
    color: ${props => props.theme.primary};
    text-align: center;
    margin-bottom: .8em;
  }
`

export const Logo = styled.img`
  display: block;
  width: 5em;
  margin: 0 auto;
`

export const Buttons = styled.div`
  display: flex;
  gap: .5em;

  a {
    flex: 1;
  }
`