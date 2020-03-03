import styled from 'styled-components';

export const SearchEl = styled.div`
  margin: 20px auto;
  width: 100%;
  text-align: center;

  input {
    width: 100%;
    max-width: 300px;
    height: 30px;
    outline: none !important;
    padding-left: 10px;
  }

  button {
    height: 34px;
    border: none;
    outline: none;
    width: 110px;
    font-weight: 600;
    color: ${({ theme }) => theme.colorWhite};
    background-color: ${({ theme }) => theme.colorBlue};
  }
`;
