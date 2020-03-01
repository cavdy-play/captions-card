import styled from 'styled-components';

export const AddBtn = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.font20};
  right: ${({ theme }) => theme.font20};
  width: ${({ theme }) => theme.percent100};
  max-width: ${({ theme }) => theme.addCaption};
  height: ${({ theme }) => theme.percent100};
  max-height: ${({ theme }) => theme.addCaption};
  border-radius: ${({ theme }) => theme.percent100};
  cursor: pointer;
  border: none !important;
  outline: none !important;
  font-size: 50px;
  color: ${({ theme }) => theme.colorWhite};
  font-weight: 600;
  background: ${({ theme }) => theme.colorBlue};
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1) rotate(180deg);
  }
`;
