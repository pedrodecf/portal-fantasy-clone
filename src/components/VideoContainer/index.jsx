import { Container } from "./styles"

export function VideoContainer() {
  return (
    <Container>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="./src/assets/videos/mainvideo.mp4"
      />
      <img src="./src/assets/images/bottomlayer.png" />
    </Container>
  )
}
