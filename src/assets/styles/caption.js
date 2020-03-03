import styled from 'styled-components';

export const CaptionEl = styled.div`
  height: 200px;
  width: 100%;
  max-width: 200px;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 2px 10px #00000045;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #5f5f5f;
`;
