import styled from 'styled-components';

export const ModalEl = styled.div`
  position: absolute;
  width: 300px;
  max-width: 300px;
  height: ${({ theme }) => theme.percent100};
  top: 0;
  background-color: ${({ theme }) => theme.colorBlue};
  padding-left: ${({ theme }) => theme.font20};
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    `
    transform: translateX(0);
    z-index: 4;
  `}
`;

export const ModalBtn = styled.button`
  font-size: 35px;
  font-weight: 600;
  background: none !important;
  border: none !important;
  outline: none !important;
  color: ${({ theme }) => theme.colorWhite};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.font20};
`;
