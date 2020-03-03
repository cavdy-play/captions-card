import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CaptionsEl = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1020px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 780px;
  }

  @media (max-width: 824px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 510px;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 320px;
  }
`;
