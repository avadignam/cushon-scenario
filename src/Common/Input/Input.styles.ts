import { styled } from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  font-family: "Trebuchet MS", sans-serif;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  border: 1px solid ${({ theme }) => theme.ACCENT};
  transition: ${({ theme }) => theme.TRANSITION};
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.ACCENT};
    outline-offset: 2px;
  }
`;

export default { Input };
