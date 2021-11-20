import styled from '@emotion/styled'

export const Container = styled.main`
  width: 100%;
  max-width: 100%;
  position: relative;

  @keyframes scan {
    from {
      top: -.8em;
    }
    50%, to {
      top: 100%;
    }
  }

  &[data-loading=true]::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1em;
    top: -.8em;
    left: 0;
    background: ${props => props.theme.primaryBackground};
    background: linear-gradient(transparent, ${props => props.theme.primaryBackground});
    animation: scan 2s linear infinite;
    opacity: .5;
  }

  video, img {
    width: 100%;
    height: calc(100vh - 70px);
    background: #000000;
    object-fit: cover;
    display: block;
  }
`