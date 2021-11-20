import styled from "@emotion/styled"

// TODO these need some love
export const Container = styled.div`
  color: ${(props) => props.theme.primary};
  display: flex;
  width: 10rem;
  align-items: center;
`

export const Text = styled.text`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  padding: 1em;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 0.3em;
  font-size: 1em;
`
