import { styled } from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 5rem);
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export default { Wrapper, FirstSection, ButtonsWrapper };
