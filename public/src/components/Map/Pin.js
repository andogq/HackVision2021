import { MapPin } from "react-feather"
import { Container, Text } from "./pinStyle"

const Pin = ({ name, address }) => {
  return (
    <Container>
      <MapPin size={48} />
      <Text>{name}</Text>
    </Container>
  )
}

const handleClick = (address) => {
  // ! handleClick gets called everytime map moves
  // TODO add google directions to location
  console.log("address", address)
}

export default Pin
