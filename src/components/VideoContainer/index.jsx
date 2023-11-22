import { Container } from "./styles"

export function VideoContainer() {
  return (
    <Container>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="public/videos/mainvideo.mp4"
      />
      <img src="public/images/bottomlayer.png" />
    </Container>
  )
}
