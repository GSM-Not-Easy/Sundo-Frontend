import { Header } from '../../components';
import * as S from './style';
import { LinkIcon, ModifyIcon } from '../../assets/svg';
import Boy from '../../assets/png/Boy.png';
import Girl from '../../assets/png/Girl.png';
import { useNavigate, useParams } from 'react-router-dom';
import { slicePoint } from '../../api/src/hooks/util/sliceNumber';
import { formatStudentNumber } from '../../api/src/hooks/util/formatStudentNumber';
import { SIGN_IN_DATA } from '../../constant/signInData';

const MyDetailPage = () => {
  const navigation = useNavigate();
  const params = useParams();
  const selectedMy = SIGN_IN_DATA.find((my) => my.id === Number(params.id));
  console.log(selectedMy);

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
                    src={slicePoint(selectedMy.number, Boy, Girl)}
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
                    <S.Name>{selectedMy.name}</S.Name>
                    <S.Major>{selectedMy.major}</S.Major>
                  </S.NameMajorContainer>
                  <S.ClassInfo>
                    <S.ClassInfoTitle>
                      {`${selectedMy.grade}${
                        selectedMy.classNum
                      }${formatStudentNumber(selectedMy.number)}`}
                    </S.ClassInfoTitle>
                    <span className='dot'>·</span>
                    <S.ClassInfoTitle>{selectedMy.email}</S.ClassInfoTitle>
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
                <S.IntroduceConent>{selectedMy.info}</S.IntroduceConent>
              </S.ContentContainer>
            </S.IntroduceContainer>
            <S.LinkWrapper>
              <S.TitleContainer>
                <S.Introduce>소개링크</S.Introduce>
              </S.TitleContainer>
              <S.LinkSortContainer>
                <S.LinkContainer
                  onClick={() => (window.location.href = selectedMy.github)}
                >
                  <S.LinkBox>
                    <LinkIcon />
                  </S.LinkBox>
                  <S.LinkContent>
                    <S.SiteName>Github</S.SiteName>
                    <S.SiteLink>{selectedMy.github}</S.SiteLink>
                  </S.LinkContent>
                </S.LinkContainer>
                <S.LinkContainer
                  onClick={() => (window.location.href = selectedMy.blog)}
                >
                  <S.LinkBox>
                    <LinkIcon />
                  </S.LinkBox>
                  <S.LinkContent>
                    <S.SiteName>Blog</S.SiteName>
                    <S.SiteLink>{selectedMy.blog}</S.SiteLink>
                  </S.LinkContent>
                </S.LinkContainer>
                <S.LinkContainer
                  onClick={() => (window.location.href = selectedMy.insta)}
                >
                  <S.LinkBox>
                    <LinkIcon />
                  </S.LinkBox>
                  <S.LinkContent>
                    <S.SiteName>Instagram</S.SiteName>
                    <S.SiteLink>{selectedMy.insta}</S.SiteLink>
                  </S.LinkContent>
                </S.LinkContainer>
              </S.LinkSortContainer>
            </S.LinkWrapper>
          </S.WhiteContainer>
        </S.WhiteWrapper>
      </S.MyPageWrapper>
    </>
  );
};

export default MyDetailPage;
