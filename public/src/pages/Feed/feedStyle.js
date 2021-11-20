import styled from '@emotion/styled'

export const Container = styled.main`
  width: 420px;
  max-width: 100%;
`

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: .4em;
  position: sticky;
  top: 0;
  background: ${props => props.theme.background};
  padding: .5em 0;

  input {
    flex: 1;
    box-sizing: border-box;
    font: inherit;
    background: ${props => props.theme.background};
    color: inherit;
    padding: .5em .8em;
    width: 100%;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 10em;
    font-size: .9em;
  }
  button {
    height: 2.6em;
    width: 2.6em;
    border-radius: 10em;
    background: none;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;

    &[type=submit] {
      background: ${props => props.theme.primary};
      color: ${props => props.theme.background};
    }
  }
`