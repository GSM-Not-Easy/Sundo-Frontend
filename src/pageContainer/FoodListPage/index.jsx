import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import Girl from '../../assets/png/Girl.png';
import Boy from '../../assets/png/Boy.png';

const FoodListPage = () => {
  let isStudent = true;
  const Food = [
    {
      classNum: '2222',
      name: '김하온',
      food: '마라탕',
      text: '너무 먹고 싶어요',
    },
    {
      classNum: '2222',
      name: '서주미',
      food: '감자탕',
      text: '저는 감자탕을 사랑해요 감자탕 너무 마싯어 감자탕은 사랑입니다 ^^ 감자탕 존맛 해주세용 제발용 아잉뀨잉헿ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
    },
    {
      classNum: '2222',
      name: '서주미',
      food: '감자탕',
      text: '저는 감자탕을 사랑해요',
    },
    {
      classNum: '2222',
      name: '김하온',
      food: '마라탕',
      text: '너무 마쉿겟당',
    },
  ];
  return (
    <S.FoodList>
      <C.Header />
      <S.FoodWrapper>
        <S.FoodTitleWrapper>
          <S.FoodTitle>신청급식</S.FoodTitle>
          {isStudent && <S.Button>신청하기</S.Button>}
        </S.FoodTitleWrapper>
        <S.FoodItemList>
          {Food.map((Food, idx) =>
            idx % 2 === 0 ? (
              <S.FoodItem key={idx}>
                <S.NameWrapper>
                  <img src={Girl} alt='여학생' />
                  <span>
                    {Food.classNum} {Food.name}
                  </span>
                </S.NameWrapper>
                <S.Food>{Food.food}</S.Food>
                <S.Text>{Food.text}</S.Text>
              </S.FoodItem>
            ) : (
              <S.FoodItem key={idx}>
                <S.NameWrapper>
                  <img src={Boy} alt='남학생' />
                  <span>
                    {Food.classNum} {Food.name}
                  </span>
                </S.NameWrapper>
                <S.Food>{Food.food}</S.Food>
                <S.Text>{Food.text}</S.Text>
              </S.FoodItem>
            )
          )}
        </S.FoodItemList>
      </S.FoodWrapper>
    </S.FoodList>
  );
};

export default FoodListPage;
