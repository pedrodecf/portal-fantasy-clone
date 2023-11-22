import { Container } from "./styles"
import mainvideo from "/public/videos/mainvideo.mp4"
import bottomlayer from "/public/images/bottomlayer.png"

export function VideoContainer() {
  return (
    <Container>
      <video autoPlay loop muted playsInline src={mainvideo} />
      <img src={bottomlayer} />
    </Container>
  )
}
