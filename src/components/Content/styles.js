import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 100vh;
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  > div.img-container {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &::after {
      content: "";
      background-image: url("public/images/cat-background.jpg");
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

  > div.info {
    display: flex;
    justify-content: center;
    align-items: center;

    div.text-container {
      width: 526px;
      text-align: left;
      color: var(--text-color);
      margin-bottom: 110px;

      h2 {
        font-size: 40px;
        font-weight: 900;
        font-family: "The Next Font", sans-serif;
      }

      p {
        margin-top: 12px;
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
      }

      .button-container {
        display: flex;
        gap: 6px;
      }

      button {
        margin-top: 12px;
        font-size: 16px;
        padding: 8px 12px;
      }
    }
  }
`