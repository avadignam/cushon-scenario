import { styled } from "styled-components";

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.ACCENT};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;
`;

const Cushon = styled.a`
  all: unset;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.ACCENT_TEXT};
`;

const User = styled.button`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.ACCENT_TEXT};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  > i {
    padding-left: 1rem;
  }
  transition: 0.2s all ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.ACCENT_TEXT};
  }
`;

export default { Wrapper, Cushon, User };
