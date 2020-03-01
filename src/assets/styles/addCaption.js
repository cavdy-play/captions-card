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

export const TextArea = styled.textarea`
  resize: none;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  height: 150px;
  font-size: 18px;
`;

export const Label = styled.label`
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Select = styled.select`
  width: 272px;
  height: 35px;
  font-size: 17px;
  background: white;
`;

export const Button = styled.button`
  width: 272px;
  margin-top: 20px;
  height: 40px;
  font-size: 18px;
  color: ${({ theme }) => theme.colorWhite};
  background-color: ${({ theme }) => theme.colorBlue};
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
