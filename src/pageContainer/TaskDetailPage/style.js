import styled from 'styled-components';

export const TaskDetail = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fb;
`;

export const TaskDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TaskDetailWrapper = styled.div`
  width: 44.5rem;
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1.5rem 2rem;
  border-radius: 0.5rem;
`;

export const TaskDetailTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 0.0625rem solid #cacaca;
`;

export const TaskDetailTitle = styled.h1`
  max-width: 28rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #212121;
  line-height: 2.25rem;
`;

export const SubmitButton = styled.button`
  width: 7rem;
  height: 2rem;
  border: 0.0625rem solid #6142f8;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  color: #6142f8;
`;

export const TaskDetailContent = styled.div`
  max-height: 31.5rem;
  line-height: 1.5rem;
  color: #5d5d5d;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
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
