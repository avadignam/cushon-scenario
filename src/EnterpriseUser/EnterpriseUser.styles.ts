import { styled } from "styled-components";

const Wrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.BORDER};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 3rem;
`;

export default { Wrapper, Text };
