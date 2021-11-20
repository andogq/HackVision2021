import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 30px 0;
`

export const Label = styled.label`
  display: block;
  padding-bottom: .2em;
  font-size: .9em;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  background: ${props => props.theme.background};
  color: inherit;
  padding: .5em .7em;
  border: 2px solid ${props => props.theme.primary};
  border-radius: .3em;
  font-size: 1em;
`