import styled from "styled-components"

export const Container = styled.button`
  border: 1px solid var(--text-color);
  background: transparent;
  font-size: 12px;
  color: var(--text-color);
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
    height: 16px;
  }

  &:hover {
    color: var(--black);
    background-color: var(--text-color);
  }
`
