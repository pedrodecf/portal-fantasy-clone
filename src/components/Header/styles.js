import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  height: 57px;
  background-color: var(--bg-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  > img {
    width: 50px;
  }

  > nav {
    display: flex;
    align-items: center;
    gap: 40px;

    a {
      color: var(--text-color);
      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }

    svg {
      font-size: 16px;
    }
  }

  button {
    border: 1px solid var(--button-color);
    background: transparent;
    font-size: 12px;
    color: var(--button-color);
    padding: 4px 8px;
    letter-spacing: 2px;
    border-radius: 4px;
    line-height: 18px;
    font-weight: 500;
    display: flex;
    gap: 5px;
    cursor: pointer;
    transition: all 200ms ease;

    img {
      height: 14px;
    }

    &:hover {
      color: var(--black);
      background-color: var(--button-color);
    }
  }
`
