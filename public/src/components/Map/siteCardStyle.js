import styled from '@emotion/styled'

export const Card = styled.div`
  background: ${(props) => props.theme.background};
  padding: 1em;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 0.3em;
`
