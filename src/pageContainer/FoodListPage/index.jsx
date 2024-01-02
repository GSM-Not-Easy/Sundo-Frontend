import * as S from './style';
import * as C from '../../components';
import Girl from '../../assets/png/Girl.png';
import Boy from '../../assets/png/Boy.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IsFoodModal, IsLoginInfo } from '../../atoms/atoms';
import { useState } from 'react';
import { slicePoint } from '../../api/src/hooks/util/sliceNumber';

const FoodListPage = () => {
  const isLoginInfo = useRecoilValue(IsLoginInfo);
  const [isFoodModal, setIsFoodModal] = useRecoilState(IsFoodModal);
  const [foods, setFoods] = useState(() => {
    const savedFoods = localStorage.getItem('foods');
    return savedFoods ? JSON.parse(savedFoods) : [];
  });

  const handleAddFood = (newFood) => {
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
    localStorage.setItem('foods', JSON.stringify(newFoods));
  };

  return (
    <S.FoodList>
      {isFoodModal && <C.FoodModal onAddFood={handleAddFood} />}
      <C.Header />
      <S.FoodWrapper>
        <S.FoodTitleWrapper>
          <S.FoodTitle>신청급식</S.FoodTitle>
          <S.ButtonWrapper>
            {isLoginInfo.role === 'student' && (
              <S.Button onClick={() => setIsFoodModal(true)}>신청하기</S.Button>
            )}
            <C.FieldLink />
          </S.ButtonWrapper>
        </S.FoodTitleWrapper>
        <S.FoodItemList>
          {foods.map((food, idx) => (
            <S.FoodItem key={idx}>
              <S.NameWrapper>
                <img src={slicePoint(food.number, Boy, Girl)} alt='여학생' />
                <span>
                  {food.grade}
                  {food.classNum}
                  {food.number} {food.name}
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
