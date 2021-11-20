import styled from '@emotion/styled'

export const Container = styled.main`
  width: 420px;
  max-width: 100%;
  padding: 0 .5em 40px;
  box-sizing: border-box;

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.1em;
    margin: 1.5em 0 .3em;
  }
  p {
    font-size: .8em;
  }
`

export const Location = styled.div`
  display: flex;
  margin: .8em 0;
  align-items: center;
  gap: .8em;
  
  span {
    flex: 1;
  }
`