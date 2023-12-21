import { Header } from '../../components';
import * as S from './style';
import Background from '../../assets/png/BackGround.png';
import { LinkIcon, ModifyIcon, XIcon, AddIcon } from '../../assets/svg';
import Boy from '../../assets/png/Boy.png';
import Girl from '../../assets/png/Girl.png';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { slicePoint } from '../../hooks/util/sliceNumber';

const linkData = [
  {
    key: 1,
    name: 'Github',
    url: 'https://github.com/TaerangLee',
  },
  {
    key: 2,
    name: 'Tistory',
    url: 'https://ltr2006.tistory.com/',
  },
  {
    key: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/trang_1.11/',
  },
];

const myObject = {
  introduce: '안녕하세요! 새로운 것을 배우는 프론트엔드 엔지니어 이태랑입니다.',
  major: 'Web/FrontEnd',
  githubLink: 'https://github.com/TaerangLee',
  portfolioLink: 'Your Portfolio Link Here',
  blogLink: 'https://ltr2006.tistory.com/',
};

const MyPage = () => {
  const [modify, setModifyData] = useState(myObject);
  const [showLinkAddContainer, setShowLinkAddContainer] = useState(false);
  const [linkDataState, setLinkDataState] = useState(linkData);

  const [classNum, setClassNum] = useState(2415);

  const navivation = useNavigate();

  const handleRemoveLink = (key) => {
    const updatedLinkData = linkDataState.filter((link) => link.key !== key);
    setLinkDataState(updatedLinkData);
  };

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
                    src={slicePoint(classNum, Boy, Girl)}
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
              <S.ModifyIconWrapper></S.ModifyIconWrapper>
            </S.ProfileWrapper>
            <S.IntroduceContainer>
              <S.TitleContainer>
                <S.Introduce>자기소개</S.Introduce>
              </S.TitleContainer>
              <S.ContentContainer>
                <S.IntroduceInput
                  value={modify.introduce}
                  onChange={(e) =>
                    setModifyData((prev) => ({
                      ...prev,
                      introduce: e.target.value,
                    }))
                  }
                />
              </S.ContentContainer>
            </S.IntroduceContainer>
            <S.LinkWrapper>
              <S.TitleContainer>
                <S.Introduce>소개링크</S.Introduce>
              </S.TitleContainer>
              <S.LinkSortContainer>
                {linkDataState.map((link) => (
                  <S.LinkContainer key={link.key}>
                    <S.LinkBox>
                      <LinkIcon />
                    </S.LinkBox>
                    <S.LinkContent>
                      <S.SiteName>{link.name}</S.SiteName>
                      <S.SiteLink>{link.url}</S.SiteLink>
                    </S.LinkContent>
                    <S.XIconWrapper onClick={() => handleRemoveLink(link.key)}>
                      <div>
                        <XIcon />
                      </div>
                    </S.XIconWrapper>
                  </S.LinkContainer>
                ))}
                {showLinkAddContainer && (
                  <S.LinkAddContainer>
                    <S.LinkInput />
                  </S.LinkAddContainer>
                )}
                <S.AddContainer onClick={() => setShowLinkAddContainer(true)}>
                  <S.AddButton>
                    <AddIcon />
                  </S.AddButton>
                </S.AddContainer>
                <S.ModifySuccessContainer>
                  <S.ModifyButton
                    onClick={() => {
                      navivation('/my');
                      toast.success('수정되었습니다.');
                    }}
                  >
                    수정하기
                  </S.ModifyButton>
                </S.ModifySuccessContainer>
              </S.LinkSortContainer>
            </S.LinkWrapper>
          </S.WhiteContainer>
        </S.WhiteWrapper>
      </S.MyPageWrapper>
    </>
  );
};

export default MyPage;
