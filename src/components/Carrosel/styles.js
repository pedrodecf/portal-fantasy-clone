import styled from "styled-components"

export const Container = styled.div`
  > .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      background-color: transparent;
      border: 1px solid var(--text-color);
      cursor: pointer;
      color: var(--text-color);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      font-size: 16px;
      border-radius: 6px;

      &:hover {
        background-color: var(--text-color);
        color: var(--black);
      }
    }
  }
`

export const ImageContainer = styled.div`
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
  > p {
    text-transform: uppercase;
    color: var(--feature-text);
    line-height: 27px;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
  }
`

export const Image = styled.img`
  width: 95%;
  border: 3px solid var(--text-color);
`
