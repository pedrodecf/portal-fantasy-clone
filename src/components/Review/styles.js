import styled from "styled-components"
import reviewbackground from "/public/images/review-background.jpg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2,
  h3 {
    color: var(--text-color);
    font-family: "The Next Font", sans-serif;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    margin-top: 18px;
    font-size: 24px;
  }

  > div.background-feature {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;

    &::after {
      content: "";
      background-image: url(${reviewbackground});
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.8;
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
`
