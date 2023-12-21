import styled from 'styled-components';

export const Field = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldContainer = styled.div`
  width: 65rem;
  height: 100%;
`;

export const FieldContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    height: 15rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
`;

export const Button = styled.button`
  width: 8.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #6142f8;
  color: #6142f8;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    color: #fff;
    background-color: #6142f8;
  }

  &:active {
    border: 0.0625rem solid #3819d2;
    background-color: #3819d2;
    color: #d7d1f6;
  }
`;
