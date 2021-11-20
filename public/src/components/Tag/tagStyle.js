import styled from '@emotion/styled'

export const Tag = styled.button`
  border-radius: 10em;
  background: ${(props) => props.theme.secondary};
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  padding: 0.2em 0.7em;
  border: 2px solid currentColor;
  font: inherit;
  font-size: 0.8em;
  font-weight: bold;
`
