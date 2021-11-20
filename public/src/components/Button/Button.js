import {
  StyledButton,
} from './buttonStyle'

const Button = ({
  type = 'button',
  loading = false,
  small = false,
  ...props
}) => (
  <StyledButton
    type={type}
    data-loading={loading}
    data-small={small}
    {...props}
  />
)

export default Button