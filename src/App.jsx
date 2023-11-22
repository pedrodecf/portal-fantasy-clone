import { Container } from "./App"
import { Header } from "./components/Header"
import { VideoContainer } from "./components/VideoContainer"
import { Content } from "./components/Content"
import { Iframe } from "./components/Iframe"
import { Features } from "./components/Features"
import { Heroes } from "./components/Heroes"
import { Review } from "./components/Review"
import { Footer } from "./components/Footer"

export function App() {
  return (
    <Container>
      <Header />
      <VideoContainer />
      <Content />
      <Iframe />
      <Features />
      <Heroes />
      <Review />
      <Footer />
    </Container>
  )
}
