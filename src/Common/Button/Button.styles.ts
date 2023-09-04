import { css, styled } from "styled-components";

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  background-color: ${({ theme }) => theme.ACCENT};
  color: ${({ theme }) => theme.ACCENT_TEXT};
  min-width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  transition: ${({ theme }) => theme.TRANSITION};
  &:hover,
  &:focus {
    outline: 2px solid ${({ theme }) => theme.ACCENT};
    background-color: ${({ theme }) => theme.BACKGROUND_COLOUR};
    color: ${({ theme }) => theme.ACCENT};
  }
  ${({ selected }) =>
    selected &&
    css`
      outline: 2px solid ${({ theme }) => theme.ACCENT};
      outline-offset: 2px;
    `}
`;

export default { Button };
