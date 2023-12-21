import styled from 'styled-components';

export const Job = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JobWrapper = styled.div`
  width: 65rem;
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
`;

export const JobTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const JobTitle = styled.h1`
  color: #212121;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const JobContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.625rem;
  margin-top: 1.25rem;
  margin-bottom: 4rem;
`;

export const JobItem = styled.div`
  width: 15rem;
  height: 11.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 15rem;
    height: 8.5rem;
    border-radius: 0.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CompanyName = styled.span`
  font-weight: 600;
  color: #212121;
`;

export const Major = styled.span`
  color: #b2b2b2;
  font-size: 0.75rem;
  font-weight: 600;
`;
