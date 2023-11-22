import { Container, ContentContainer } from "./styles"
import { ButtonWhite } from "../ButtonWhite"
import { Button } from "../Button"

export function Content() {
  return (
    <ContentContainer>
      <Container>
        <div className="img-container">
          <img src="/src/assets/images/black-cat-background.png" />
        </div>
        <div className="info">
          <div className="text-container">
            <h2>GREETINGS WANDERER!</h2>
            <p>
              It has been 2000 years since the War of the Goddesses - Ravenna is
              dead, and the Pyli Kingdom has become prosperous once again. Or so
              it seems.
            </p>
            <p>
              Without warning Porbles, the ancient magical beings which inhabit
              the Wilderness, have started to turn on humans. Chaos reigns
              everywhere outside the capital.
            </p>
            <p>
              It is up to you to solve the great mysteries of this land and save
              the kingdom once and for all!
            </p>
            <div className="button-container">
              <Button title="WISHLIST" />
              <ButtonWhite title="EARLY ACESS" />
            </div>
          </div>

          <img src="/src/assets/images/cat.png" alt="Ilustração de um gato" />
        </div>
      </Container>
    </ContentContainer>
  )
}
