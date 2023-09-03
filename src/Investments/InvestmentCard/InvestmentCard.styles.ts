import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  padding: 1rem 0;
`;

const FundName = styled.div`
  font-size: 1.25rem;
`;

const AmountAndDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default { Wrapper, FundName, AmountAndDate };
