import { forwardRef } from 'react'
import {
  Wrapper,
  Label,
  Input,
} from './textFieldStyle'

const TextField = forwardRef(({
  label,
  ...props
}, ref) => (
  <Wrapper>
    {label && <Label htmlFor={props.id}>{label}</Label>}
    <Input ref={ref} {...props} />
  </Wrapper>
))

export default TextField