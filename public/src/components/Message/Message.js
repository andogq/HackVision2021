import {
  Wrapper,
  CloseButton,
} from './messageStyle'

const Message = ({
  children,
  error = false,
  onClose,
}) => (
  <Wrapper data-error={error}>
    <span>{children}</span>
    <CloseButton onClick={onClose} type="button" title="Close">×</CloseButton>
  </Wrapper>
)

export default Message