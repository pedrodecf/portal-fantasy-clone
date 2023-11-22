import { Container } from "./styles"
import chicken from "/public/images/chicken.gif"

export function Button({ title }) {
  return (
    <Container>
      <img src={chicken} />
      {title}
    </Container>
  )
}
