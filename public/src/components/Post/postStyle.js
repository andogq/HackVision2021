import styled from '@emotion/styled'

export const Wrapper = styled.article`
  margin: .5em;
  box-sizing: border-box;
  padding: .5em .7em;
  border-radius: .4em;
  border: 2px solid ${props => props.theme.primaryLight};

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;

  img {
    height: 2.5em;
    width: 2.5em;
    display: block;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 10em;
    overflow: hidden;
    object-fit: cover;
    background: ${props => props.theme.primaryBackground};
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.primary};
    flex: 1;
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
  }
`

export const Title = styled.h2`
  margin: .4em 0;
  font-weight: bold;
  font-size: 1.2em;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: .4em;
`