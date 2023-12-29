import * as S from './style';
import * as C from '../../components';
import Girl from '../../assets/png/Girl.png';
import Boy from '../../assets/png/Boy.png';
import { useRecoilState } from 'recoil';
import { IsFoodModal } from '../../atoms/atoms';
import { useState } from 'react';
import { slicePoint } from '../../api/src/util/sliceNumber';

const FoodListPage = () => {
  let isStudent = true;
  const [isFoodModal, setIsFoodModal] = useRecoilState(IsFoodModal);
  const [foods, setFoods] = useState([
    {
      classNum: '2405',
      name: '김하온',
      food: '마라탕',
      text: '너무 먹고 싶어요',
    },
  ]);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <S.FoodList>
      {isFoodModal && <C.FoodModal onAddFood={handleAddFood} />}
      <C.Header />
      <S.FoodWrapper>
        <S.FoodTitleWrapper>
          <S.FoodTitle>신청급식</S.FoodTitle>
          <S.ButtonWrapper>
            {isStudent && (
              <S.Button onClick={() => setIsFoodModal(true)}>신청하기</S.Button>
            )}
            <C.FieldLink />
          </S.ButtonWrapper>
        </S.FoodTitleWrapper>
        <S.FoodItemList>
          {foods.map((food, idx) => (
            <S.FoodItem key={idx}>
              <S.NameWrapper>
                <img src={slicePoint(food.classNum, Boy, Girl)} alt='여학생' />
                <span>
                  {food.classNum} {food.name}
                </span>
              </S.NameWrapper>
              <S.Food>{food.food}</S.Food>
              <S.Text>{food.text}</S.Text>
            </S.FoodItem>
          ))}
        </S.FoodItemList>
      </S.FoodWrapper>
    </S.FoodList>
  );
};

export default FoodListPage;
