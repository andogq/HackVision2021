import styled from '@emotion/styled'

export const Wrapper = styled.nav`
  background-color: ${props => props.theme.primaryBackground};
  border-top: 2px solid ${props => props.theme.primary};
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const StyledItem = styled.div`
  color: ${props => props.theme.primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .2em;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4em;
    padding: .2em 0;
    border-radius: 10em;
  }
  span {
    font-size: .8em;
    font-weight: 600;
  }

  &[data-active=true] div {
    background: ${props => props.theme.primaryLight}AA;
  }

  &[data-primary=true] {
    width: 4em;
    height: 4em;
    background-color: ${props => props.theme.primaryBackground};
    border: 2px solid ${props => props.theme.primary};
    border-radius: 10em;
    transform: translateY(calc(-50% - 2px));
    
    span {
      display: none;
    }

    div {
      height: 100%;
    }
  }
`