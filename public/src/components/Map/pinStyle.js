import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 6px;
  transform: translate(-50%, -100%);
  height: 24px;
  width: 24px;
  transition: transform .1s;
  transform-origin: bottom center;

  &[data-active=true] {
    transform: translate(-50%, -100%) scale(1.2);
  }
`

export const MapPin = styled.div`
  height: 100%;
  width: 100%;
  background: var(--pin-color, #000000);
  background: radial-gradient(transparent 20%, var(--pin-color, #000000) 20%);
  border-radius: 10em 10em 10em 0;
  transform: rotate(-45deg);
`
