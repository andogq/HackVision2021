import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 30px 0;
  background: ${props => props.theme.error};
  color: #FFF;
  padding: .5em .5em .5em 1.5em;
  border-radius: .5em;
  display: flex;
  align-items: center;
  gap: 1em;

  span {
    flex: 1;
    display: block;
  }
`

export const CloseButton = styled.button`
  height: 2em;
  width: 2em;
  border-radius: .5em;
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-size: 1.3em;
  font-weight: 800;
`