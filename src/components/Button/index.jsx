import { Container } from "./styles"

export function Button({ title }) {
  return (
    <Container>
      <img src="public/images/chicken.gif" />
      {title}
    </Container>
  )
}
