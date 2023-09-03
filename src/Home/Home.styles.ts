import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  gap: 3rem;
  font-size: 2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

export default { Wrapper, ButtonsWrapper };
