import { atom } from 'recoil';

export const Step = atom({
  key: 'Step',
  default: '역할선택',
});

export const IsFoodModal = atom({
  key: 'IsModal',
  default: false,
});
