import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 26.25rem;
  height: 19.0625rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    width: 100%;
    height: 2.75rem;
    border-radius: 0.5rem;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    background: #6142f8;
    color: #fff;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #212121;
`;

export const UploadBox = styled.div`
  width: 100%;
  height: 12rem;
  border: 1px dashed #6142f8;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 400;
    color: #212121;
    cursor: pointer;
  }
`;
