import styled from '@emotion/styled'

export const Container = styled.main`
  width: 420px;
  max-width: 100%;
  padding-bottom: 40px;
`

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: .7em;

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
  }
`

export const UserInfo = styled.div`
  border-top: 2px solid ${props => props.theme.primary};
  background: ${props => props.theme.primaryBackground};
  position: relative;
  padding: 4em 1em .6em;

  img {
    height: 5em;
    width: 5em;
    display: block;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 10em;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    top: -2em;
    background: ${props => props.theme.primaryBackground};
  }
  h1 {
    color: ${props => props.theme.primary};
    font-size: 1.5em;
    margin: 0;
  }
`