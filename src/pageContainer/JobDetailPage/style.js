import styled from 'styled-components';

export const JobDetail = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JobDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const JobDetailWrapper = styled.div`
  width: 37.75rem;
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1.5rem 2rem;
  border-radius: 0.5rem;

  img {
    width: 33.75rem;
    height: 17.5rem;
    border-radius: 0.5rem;
  }
`;

export const JobDetailContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

export const JobCompanyName = styled.span`
  font-size: 0.75rem;
  color: #888;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #212121;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Major = styled.span`
  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid #ff8a00;
  color: #ff8a00;
  border-radius: 1.25rem;
  font-size: 0.875rem;
`;

export const Content = styled.div`
  height: 13rem;
  margin-top: 0.25rem;
  overflow: auto;
  font-size: 1.875rem;
  color: #5d5d5d;
  font-size: 1rem;
  line-height: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DownloadButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5625rem;
  height: 1.875rem;
  background-color: #eee;
  border-radius: 1.25rem;
`;

export const DownloadButton = styled.span`
  color: #888;
  font-weight: 600;
  font-size: 0.75rem;
`;

export const BackButton = styled.button`
  width: 5.625rem;
  height: 1.875rem;
  border: 0.0625rem solid #6142f8;
  border-radius: 0.5rem;
  color: #6142f8;
  font-weight: 600;
  font-size: 0.75rem;

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
