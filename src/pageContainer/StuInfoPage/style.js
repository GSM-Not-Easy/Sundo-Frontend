import styled from 'styled-components';

export const StuInfo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 65rem;
  margin-top: 4.375rem;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #212121;
`;

export const SubTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.3125rem;
  color: #888;
`;

export const FilterButton = styled.button`
  width: 5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0.0625rem solid #6142f8;
  color: #6142f8;
  border-radius: 0.5rem;

  &:hover {
    background-color: #6142f8;
    color: #fff;
    path {
      stroke: #fff;
    }
  }

  &:active {
    background-color: #3819d2;
    color: #d7d1f6;
    path {
      stroke: #d7d1f6;
    }
  }
`;

export const StuList = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.625rem;
`;

export const StuItem = styled.div`
  position: relative;
  width: 15rem;
  height: 17.5625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(112, 144, 176, 0.12);
  border: 0.0625rem solid #f5f5f5;

  img {
    width: 12.5rem;
    height: 11.25rem;
    margin-top: 1.5rem;
  }
`;

export const StuInfoSelect = styled.div`
  position: absolute;
  width: 15rem;
  height: 17.5625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: #eee;
  font-weight: 600;
  gap: 0.25rem;

  svg {
    margin-bottom: 0.25rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
`;

export const StuInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1.25rem;
  margin-top: 0.875rem;
  gap: 0.5rem;
`;

export const Name = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #212121;
`;

export const Major = styled.span`
  color: #6142f8;
  font-size: 0.75rem;
  font-weight: 400;
`;
