import { styled } from "styled-components";

const Select = styled.select`
  padding: 0.5rem;
  font-family: "Trebuchet MS", sans-serif;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  border-color: ${({ theme }) => theme.ACCENT};
  transition: ${({ theme }) => theme.TRANSITION};
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.ACCENT};
    outline-offset: 2px;
  }
`;

export default { Select };
