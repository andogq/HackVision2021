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

export const Content = styled.div`
  padding: 0 1em;
`

export const Recycled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: .8em;
    align-items: center;

    img {
      height: 6em;
      width: 6em;
      display: block;
      border: 2px solid ${props => props.theme.primary};
      border-radius: 10em;
      overflow: hidden;
      object-fit: cover;
      background: ${props => props.theme.primaryBackground};
    }
    span {
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }
`

export const Badges = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em 0;

  div {
    display: flex;
    flex-direction: column;
    gap: .8em;
    align-items: center;

    img {
      height: 6em;
      width: 6em;
      display: block;
      border: 2px solid ${props => props.theme.primary};
      border-radius: 10em;
      overflow: hidden;
      object-fit: cover;
      background: ${props => props.theme.primaryBackground};
    }
    span {
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  padding-top: .5em;
  background: ${props => props.theme.primaryBackground};

  button {
    margin: 0;
    padding: .6em;
    background: ${props => props.theme.primaryLight};
    border: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    flex: 1;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;

    &[data-active=true] {
      background: ${props => props.theme.background};
      font-weight: bold;
    }
  }
`