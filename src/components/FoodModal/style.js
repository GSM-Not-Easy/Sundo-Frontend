import styled from 'styled-components';

export const FoodModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 26.25rem;
  height: 18.0625rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.25rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: 212121;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  label {
    font-size: 0.875rem;
    color: #212121;
  }

  input {
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid #cacaca;

    &:focus {
      border: 0.0625rem solid #6142f8;
    }

    &::placeholder {
      color: #b2b2b2;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;
