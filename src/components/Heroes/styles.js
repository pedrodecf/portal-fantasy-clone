import styled from "styled-components"

export const Container = styled.div`
  width: 952px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 150px;

  h2 {
    color: var(--text-color);
    font-family: "The Next Font", sans-serif;
    font-size: 40px;
    margin-bottom: 60px;
  }
`

export const HeroesImgContainer = styled.div`
  display: flex;
  gap: 20px;


  img {
    cursor: pointer;
  }
`

export const InfoHeroes = styled.div`
  display: flex;
  position: relative;
`

export const InfoHeroesText = styled.div`
  width: 65%;

  h3 {
    margin-top: 28px;
    font-size: 28px;
    line-height: 33.6px;
    color: var(--feature-text);
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: var(--feature-text);
    font-weight: 300;
    margin-top: 18px;
  }
`

export const InfoHeroesImg = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0;
  top: -200px;
  width: 250px;
  animation: fadeIn 0.400s ease-in-out;

  @keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`
