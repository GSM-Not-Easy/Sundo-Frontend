import { useRecoilState } from 'recoil';
import * as S from './style';
import { Step } from '../../../atoms/atoms';

const ProfilePage = () => {
  const [step, setStep] = useRecoilState(Step);
  return (
    <S.ProfileWrapper>
      <S.ProfileContainer>
        <S.IntroduceContainer>
          <S.Title>자기소개</S.Title>
          <S.ContentArea placeholder='과제에 대한 내용을 입력해 주세요.' />
        </S.IntroduceContainer>
        <S.LinkContainer>
          <S.Title>소개링크</S.Title>
          <S.Link placeholder='포트폴리오 링크를 기재해주세요' />
          <S.Link placeholder='깃허브 링크를 기재해주세요' />
          <S.Link placeholder='블로그 링크를 기재해주세요' />
        </S.LinkContainer>
        <S.MenuTitleContainer>
          <S.MenuTitle>이전으로</S.MenuTitle>
          <S.MenuTitle onClick={() => setStep('회원가입완료')}>
            확인
          </S.MenuTitle>
        </S.MenuTitleContainer>
      </S.ProfileContainer>
    </S.ProfileWrapper>
  );
};

export default ProfilePage;
