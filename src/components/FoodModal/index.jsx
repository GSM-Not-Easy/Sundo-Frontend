import { useEffect, useRef } from 'react';
import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../';
import { useRecoilState } from 'recoil';
import { IsFoodModal } from '../../atoms/atoms';

const FoodModal = () => {
  const modalRef = useRef(null);
  const [isFoodModal, setIsFoodModal] = useRecoilState(IsFoodModal);
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
            <input id='menu' />
          </S.InputItem>
          <S.InputItem>
            <label htmlFor='intro'>한줄소개</label>
            <input id='intro' />
          </S.InputItem>
        </S.InputWrapper>
        <S.ButtonContainer>
          <C.Button
            width='6.4375rem'
            height='2.75rem'
            backgroundcolor='#6142F8'
            borderradius='0.5rem'
            color='#fff'
          >
            확인
          </C.Button>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </S.FoodModal>
  );
};

export default FoodModal;
