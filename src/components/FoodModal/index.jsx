import { useEffect, useRef } from 'react';
import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IsFoodModal, IsLoginInfo } from '../../atoms/atoms';
import { useForm } from 'react-hook-form';
import { formatStudentNumber } from '../../api/src/hooks/util/formatStudentNumber';

const FoodModal = ({ onAddFood }) => {
  const modalRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();
  const [isFoodModal, setIsFoodModal] = useRecoilState(IsFoodModal);
  const isLoginInfo = useRecoilValue(IsLoginInfo);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsFoodModal(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setIsFoodModal(false);
      }
    };

    if (isFoodModal) {
      window.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isFoodModal]);

  const onSubmit = (data) => {
    const newFood = {
      grade: isLoginInfo.grade,
      classNum: isLoginInfo.classNum,
      number: formatStudentNumber(isLoginInfo.number),
      name: isLoginInfo.name,
      food: data.menu,
      text: data.intro,
    };
    onAddFood(newFood);
    reset();
    setIsFoodModal(false);
  };

  return (
    <S.FoodModal>
      <S.ModalWrapper ref={modalRef}>
        <S.ModalTitleWrapper>
          <S.Title>급식신청</S.Title>
          <div onClick={() => setIsFoodModal(false)}>
            <A.XMark />
          </div>
        </S.ModalTitleWrapper>
        <S.InputWrapper>
          <S.InputItem>
            <label htmlFor='menu'>메뉴</label>
            <input
              autoComplete='off'
              id='menu'
              placeholder='메뉴를 입력해 주세요.'
              {...register('menu', { required: true })}
            />
          </S.InputItem>
          <S.InputItem>
            <label htmlFor='intro'>한줄소개</label>
            <input
              autoComplete='off'
              id='intro'
              placeholder='메뉴에 대한 한 줄 소개를 해주세요.'
              {...register('intro', { required: true })}
            />
          </S.InputItem>
        </S.InputWrapper>
        <S.ButtonContainer>
          <C.Button
            width='6.4375rem'
            height='2.75rem'
            backgroundcolor='#6142F8'
            borderradius='0.5rem'
            color='#fff'
            type='submit'
            onClick={handleSubmit(onSubmit)}
          >
            확인
          </C.Button>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </S.FoodModal>
  );
};

export default FoodModal;
