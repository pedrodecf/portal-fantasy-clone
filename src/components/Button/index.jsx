import { Container } from "./styles"

export function Button({ title }) {
  return (
    <Container>
      <img src="/src/assets/images/chicken.gif" />
      {title}
    </Container>
  )
}
