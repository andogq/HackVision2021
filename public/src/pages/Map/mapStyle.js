import styled from '@emotion/styled'

export const Container = styled.main`
  width: 100%;
  max-width: 100%;
  position: relative;
`

export const PinDetails = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0.5em;
  right: 0.5em;
  background: ${(props) => props.theme.background};
  border-radius: 0.5em;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.primary};
  padding: 0.5em 0.7em;

  h1 {
    margin: 0;
    font-size: 1.2em;
    color: ${(props) => props.theme.primary};
    margin-bottom: 0.3em;
  }
`

export const AcceptsContainer = styled.div`
  margin: 0.5em 0;
`

export const Return = styled.div`
  position: fixed;
  top: 2em;
  left: 2em;
`
