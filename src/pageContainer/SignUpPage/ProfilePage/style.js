import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  width: 664px;
  height: 37.3125rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 3rem 2.25rem;
`;
export const IntroduceContainer = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  color: #212121;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const ContentArea = styled.textarea`
  margin-top: 1rem;
  width: 37rem;
  height: 7.8125rem;
  outline: none;
  padding: 1rem;
  resize: none;
  border-radius: 0.5rem;
  border: 0.0625rem solid #b2b2b2;

  &::placeholder {
    color: #b2b2b2;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
`;

export const Link = styled.input`
  width: 37rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #b2b2b2;
  color: #5d5d5d;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-indent: 1rem;

  &::placeholder {
    color: #b2b2b2;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
  }
`;
export const MenuTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  width: 37.5rem;
  margin-top: 3rem;
`;

export const MenuTitle = styled.div`
  border-radius: 0.5rem;
  border: 0.0625rem solid #6142f8;
  background: #fff;
  cursor: pointer;
  width: 7.625rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6142f8;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;

  &:hover {
    color: white;
    background-color: #6142f8;
  }
`;
