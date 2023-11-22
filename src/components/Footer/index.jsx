import { Container } from "./styles"
import { FaDiscord, FaTwitter } from "react-icons/fa"

export function Footer() {
  return (
    <Container>
      <a href="https://discord.com/invite/portalfantasy" target="_blank">
        <FaDiscord />
      </a>

      <a href="https://twitter.com/PortalFantasyio" target="_blank">
        <FaTwitter />
      </a>
    </Container>
  )
}
