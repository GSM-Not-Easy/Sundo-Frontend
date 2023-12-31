import { Header } from '../../components';
import * as S from './style';
import { LinkIcon, ModifyIcon } from '../../assets/svg';
import Boy from '../../assets/png/Boy.png';
import Girl from '../../assets/png/Girl.png';
import { useNavigate } from 'react-router-dom';
import { slicePoint } from '../../api/src/hooks/util/sliceNumber';
import { formatStudentNumber } from '../../api/src/hooks/util/formatStudentNumber';
import { useRecoilValue } from 'recoil';
import { IsLoginInfo } from '../../atoms/atoms';

const linkData = [
  {
    name: 'Github',
    url: 'https://github.com/TaerangLee',
  },
  {
    name: 'Tistory',
    url: 'https://ltr2006.tistory.com/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/trang_1.11/',
  },
];

const MyPage = () => {
  const isLoginInfo = useRecoilValue(IsLoginInfo);
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <S.MyPageWrapper>
        <S.WhiteWrapper>
          <S.WhiteContainer>
            <S.ProfileWrapper>
              <S.ProfileContainer>
                <S.ImgContainer>
                  <img
                    src={slicePoint(isLoginInfo.number, Boy, Girl)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt='123'
                  />
                </S.ImgContainer>
                <S.ProfileContent>
                  <S.NameMajorContainer>
                    <S.Name>{isLoginInfo.name}</S.Name>
                    <S.Major>Front-End Developer</S.Major>
                  </S.NameMajorContainer>
                  <S.ClassInfo>
                    <S.ClassInfoTitle>
                      {`${isLoginInfo.grade}${
                        isLoginInfo.classNum
                      }${formatStudentNumber(isLoginInfo.number)}`}
                    </S.ClassInfoTitle>
                    <span className='dot'>·</span>
                    <S.ClassInfoTitle>{isLoginInfo.email}</S.ClassInfoTitle>
                  </S.ClassInfo>
                </S.ProfileContent>
              </S.ProfileContainer>
              <S.ModifyIconWrapper>
                <S.ModifyIconContainer onClick={() => navigation('/modifymy')}>
                  <ModifyIcon />
                </S.ModifyIconContainer>
              </S.ModifyIconWrapper>
            </S.ProfileWrapper>
            <S.IntroduceContainer>
              <S.TitleContainer>
                <S.Introduce>자기소개</S.Introduce>
              </S.TitleContainer>
              <S.ContentContainer>
                <S.IntroduceConent>
                  안녕하세요!! 새로운 것을 배우는 프론트엔드 엔지니어입니다.
                </S.IntroduceConent>
              </S.ContentContainer>
            </S.IntroduceContainer>
            <S.LinkWrapper>
              <S.TitleContainer>
                <S.Introduce>소개링크</S.Introduce>
              </S.TitleContainer>
              <S.LinkSortContainer>
                <>
                  {linkData.map((link, index) => (
                    <S.LinkContainer
                      key={index}
                      onClick={() => (window.location.href = link.url)}
                    >
                      <S.LinkBox>
                        <LinkIcon />
                      </S.LinkBox>
                      <S.LinkContent>
                        <S.SiteName>{link.name}</S.SiteName>
                        <S.SiteLink>{link.url}</S.SiteLink>
                      </S.LinkContent>
                    </S.LinkContainer>
                  ))}
                </>
              </S.LinkSortContainer>
            </S.LinkWrapper>
          </S.WhiteContainer>
        </S.WhiteWrapper>
      </S.MyPageWrapper>
    </>
  );
};

export default MyPage;
