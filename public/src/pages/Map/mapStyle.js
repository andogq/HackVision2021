import styled from '@emotion/styled'

export const Container = styled.main`
  width: 420px;
  max-width: 100%;
  position: relative;
`

export const PinDetails = styled.div`
  position: absolute;
  bottom: 40px;
  left: .5em;
  right: .5em;
  background: ${props => props.theme.background};
  border-radius: .5em;
  box-sizing: border-box;
  border: 2px solid ${props => props.theme.primary};
  padding: .5em .7em;

  h1 {
    margin: 0;
    font-size: 1.2em;
    color: ${props => props.theme.primary};
    margin-bottom: .3em;
  }
`