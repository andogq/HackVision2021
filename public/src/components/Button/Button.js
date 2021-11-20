import {
  StyledButton,
} from './buttonStyle'

const Button = ({
  type = 'button',
  loading = false,
  ...props
}) => (
  <StyledButton
    type={type}
    data-loading={loading}
    {...props}
  />
)

export default Button