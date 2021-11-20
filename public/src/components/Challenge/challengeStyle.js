import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background: ${props => props.theme.primaryLight};
  border-radius: .4em;
  padding: .4em;
  display: flex;
  align-items: center;
  gap: .2em;
  margin-top: .5em;

  img {
    height: 4em;
    width: 4em;
    border-radius: inherit;
    display: block;
    object-fit: cover;
  }
  span {
    flex: 1;
    font-weight: bold;
    font-size: 1.2em;
    display: block;
    padding: .4em;

    &::before {
      content: 'CHALLENGE';
      display: block;
      letter-spacing: .05em;
      font-size: .6em;
      font-weight: 800;
      color: ${props => props.theme.primary};
    }
  }
`