import { Header } from '../../components';
import * as S from './style';
import Background from '../../assets/png/BackGround.png';
import { LinkIcon, ModifyIcon } from '../../assets/svg';

const linkData = [
  {
    name: 'Github',
    url: 'https://github.com/haonee',
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
                    src=''
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
                    <S.Name>이태랑</S.Name>
                    <S.Major>Web/FrontEnd</S.Major>
                  </S.NameMajorContainer>
                  <S.ClassInfo>
                    <S.ClassInfoTitle>2415</S.ClassInfoTitle>
                    <span className='dot'>·</span>
                    <S.ClassInfoTitle>s22051@gsm.hs.kr</S.ClassInfoTitle>
                  </S.ClassInfo>
                </S.ProfileContent>
              </S.ProfileContainer>
              <S.ModifyIconWrapper>
                <S.ModifyIconContainer>
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
                  안녕하세요 프론트를 싫어하는 이태랑입니다. 저는 서버 개발자가
                  되고 싶습니다.
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
