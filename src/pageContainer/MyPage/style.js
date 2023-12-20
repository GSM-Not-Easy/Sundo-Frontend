import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  width: 100vw;
  height: 92vh;
  background-color: #f7f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteWrapper = styled.div`
  width: 44.5rem;
  height: 50.875rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
`;

export const WhiteContainer = styled.div`
  width: 37.5rem;
  height: 43.875rem;
  margin: 3.5rem 0 0 3.5rem;
`;

export const ProfileWrapper = styled.div`
  width: 37.5rem;
  height: 5rem;
  display: flex;
`;
export const ProfileContainer = styled.div`
  width: 16.5rem;
  height: 5rem;
  display: flex;
`;

export const ImgContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 9.4375rem;
  overflow: hidden;
  background-color: #f5f5f5;
`;

export const ProfileContent = styled.div`
  width: 11.5rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
`;

export const NameMajorContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
`;

export const Name = styled.span`
  font-weight: 600;
  line-height: 2.25rem;
  font-size: 1.5rem;
  color: black;
`;

export const Major = styled.span`
  border-radius: 0.5625rem;
  border: 0.0625rem solid #6142f8;
  color: #6142f8;
  font-weight: 500;
  line-height: 1.25rem;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  width: 5.875rem;
  height: 1.25rem;
`;

export const ClassInfo = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  left: 0.125rem;
  gap: 0.25rem;
  span {
    color: #888;
  }

  .dot {
    position: relative;
    margin-top: 0.0625rem;
  }
`;

export const ClassInfoTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const ModifyIconWrapper = styled.div`
  height: 5rem;
  width: 21rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModifyIconContainer = styled.div`
  cursor: pointer;

  &:hover {
    & svg {
      path {
        stroke: #6142f8;
      }
    }
  }
`;

export const IntroduceContainer = styled.div`
  padding-top: 2.25rem;
  width: 37.5rem;
  height: 6.875rem;
`;

export const TitleContainer = styled.div`
  width: 37.5rem;
`;

export const Introduce = styled.span`
  font-size: 0.75rem;
  color: black;
  font-weight: 400;
  line-height: 1.125rem;
`;

export const ContentContainer = styled.div`
  width: 37.5rem;
  padding: 1rem;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  margin-top: 0.25rem;
`;

export const IntroduceConent = styled.span`
  color: #5d5d5d;
  height: auto;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const LinkWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
`;

export const LinkContainer = styled.div`
  width: 37.5rem;
  height: 3.625rem;
  background-color: #fafafa;
  border: 0.0625rem solid #f5f5f5;
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    opacity: 60%;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  height: 3.625rem;
  padding-left: 1rem;
`;

export const LinkContent = styled.div`
  height: 3.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
`;

export const SiteName = styled.span`
  color: #212121;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const SiteLink = styled.a`
  color: #888;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
`;

export const LinkSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
