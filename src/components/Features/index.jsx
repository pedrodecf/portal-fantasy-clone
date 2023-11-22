import { Container } from "./styles"
import { Carrosel } from "../Carrosel"

export function Features() {
  return (
    <Container>
      <div className="background-feature"></div>
      <h2>Features</h2>
      <div className="carrosel-container">
        <Carrosel />
      </div>
    </Container>
  )
}
