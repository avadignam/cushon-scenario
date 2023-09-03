import { styled } from "styled-components";

const Select = styled.select`
  padding: 0.5rem;
  font-family: "Trebuchet MS", sans-serif;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  border-color: ${({ theme }) => theme.ACCENT};
`;

export default { Select };
