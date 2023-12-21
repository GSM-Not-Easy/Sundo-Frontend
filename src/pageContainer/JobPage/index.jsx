import * as S from './style';
import * as C from '../../components';
import TestImg from '../../assets/png/BackGround.png';

const JobPage = () => {
  return (
    <S.Job>
      <C.Header />
      <S.JobWrapper>
        <S.JobTitle>취업진로부</S.JobTitle>
        <S.JobContent>
          {Array.from({ length: 20 }).map(() => (
            <S.JobItem>
              <img src={TestImg} alt='테스트 이미지' />
              <S.Info>
                <S.CompanyName>(주)비바리퍼블리카</S.CompanyName>
                <S.Major>UI/UX 디자이너</S.Major>
              </S.Info>
            </S.JobItem>
          ))}
        </S.JobContent>
      </S.JobWrapper>
    </S.Job>
  );
};

export default JobPage;
