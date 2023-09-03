import { styled } from "styled-components";

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.ACCENT};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Cushon = styled.a`
  all: unset;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.ACCENT_TEXT};
`;

const User = styled.div`
  color: ${({ theme }) => theme.ACCENT_TEXT};
  > i {
    padding-left: 1rem;
  }
`;

export default { Wrapper, Cushon, User };
