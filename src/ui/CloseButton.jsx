import styled from "styled-components";

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s ease 0s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

export default CloseButton;
