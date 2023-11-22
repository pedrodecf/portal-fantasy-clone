import { Container } from "./styles"
import { FaDiscord, FaTwitter } from "react-icons/fa"
import { Button } from "../Button"
import logo from "/public/images/logo.png"


export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo Portal Fantasy" />
      <nav>
        <a href="#" target="_blank">
          Media
        </a>
        <a
          href="https://www.webtoons.com/en/challenge/portal-fantasy/list?title_no=815824"
          target="_blank"
        >
          Webcomic
        </a>
        <a href="https://discord.com/invite/portalfantasy" target="_blank">
          <FaDiscord />
        </a>
        <a href="https://twitter.com/PortalFantasyio" target="_blank">
          <FaTwitter />
        </a>
      </nav>
      <Button title="WISHLIST" />
    </Container>
  )
}
