import { styled } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5rem;
  height: calc(100vh - 7rem);
  width: 15rem;
  border-left: 1px solid ${({ theme }) => theme.BORDER};
  background-color: ${({ theme }) => theme.BACKGROUND_COLOUR};
  z-index: 1;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  padding-bottom: 1rem;
`;

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  &:focus {
    outline: 2px outline ${({ theme }) => theme.ACCENT};
  }
`;

const Options = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
`;

const Option = styled.li`
  all: unset;
  padding: 1rem 0;
`;

const OptionLink = styled.a`
  all: unset;
  cursor: pointer;
  &:focus {
    outline: 2px outline ${({ theme }) => theme.ACCENT};
  }
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  padding: 0.5rem;
  transition: 0.2s all ease;
  &:hover {
    background-color: ${({ theme }) => theme.TRANSPARENT_ACCENT};
  }
`;

export default { Wrapper, Header, CloseButton, Options, Option, OptionLink };
