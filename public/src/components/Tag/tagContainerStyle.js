import styled from '@emotion/styled'

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.5em;
  gap: 0.3em;
  justify-content: ${(props) => props.justify};
`
