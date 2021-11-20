import styled from '@emotion/styled'

export const StyledButton = styled.button`
  padding: .6em 2em;
  margin: 0;
  font: inherit;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  border-radius: .3em;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  border: 0;

  ${props => props.disabled && `
    opacity: .5;
    cursor: default;
  `}

  &[data-loading=true] {
    color: transparent;

    &::before {
      content: 'loading...';
      color: ${props => props.theme.background};
      opacity: .6;
      font-style: italic;
      font-size: .8em;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &[data-small=true] {
    padding: .6em 1em;
    font-size: .7em;
    width: initial;
  }
`