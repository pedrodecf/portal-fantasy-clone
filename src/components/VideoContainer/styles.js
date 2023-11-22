import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  z-index: 2;
  position: relative;

  > video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  > img {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`