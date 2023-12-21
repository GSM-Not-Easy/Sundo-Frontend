import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 92.15vh;
`;

export const TitleContainer = styled.div`
  width: 100vw;
  height: 23.875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 4.5625rem;
  color: white;
`;

export const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 50vh;
`;

export const StartButton = styled.button`
  margin-top: 1.75rem;
  width: 12.125rem;
  height: 3rem;
  border: 0.0625rem solid white;
  border-radius: 0.5rem;
  background-color: #7459f9;
  color: white;
  line-height: 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;

  &:active {
    opacity: 50%;
  }
`;
