import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import featurabackground from "/public/images/feature-background.jpg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div.carrosel-container {
    margin: 0 50px;
  }

  > div.background-feature {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;

    &::after {
      content: "";
      background-image: url(${featurabackground});
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.6;
      -webkit-mask: linear-gradient(
          to bottom,
          #0000 0,
          #0000 5%,
          #000 40%,
          #0000 95%,
          #0000 0
        )
        100% 50%/100% 100% repeat-x;

      mask: linear-gradient(
          to bottom,
          #0000 0,
          #0000 5%,
          #000 40%,
          #0000 95%,
          #0000 0
        )
        100% 50%/100% 100% repeat-x;
    }
  }

  h2 {
    color: var(--text-color);
    text-align: center;
    text-transform: uppercase;
    font-family: "The Next Font", sans-serif;
    font-size: 40px;
    margin-bottom: 50px;
  }
`