import { styled } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Section = styled.div`
  position: relative;
  border-left: 1px solid ${({ theme }) => theme.BORDER};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Warning = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.ERROR};
`;

const Success = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.ACCENT_TEXT};
  background-color: ${({ theme }) => theme.SUCCESS};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5rem;
`;

export default { Wrapper, Section, Warning, Success, ButtonWrapper };
