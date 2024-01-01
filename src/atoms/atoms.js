import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const Step = atom({
  key: 'Step',
  default: '역할선택',
});

export const IsFoodModal = atom({
  key: 'IsModal',
  default: false,
});

export const IsStudent = atom({
  key: 'IsStudent',
  default: false,
});

export const IsHomeRoom = atom({
  key: 'IsHomeRoom',
  default: false,
});

const { persistAtom } = recoilPersist({
  key: 'IsLoginInfo',
  storage: localStorage,
});

export const IsLoginInfo = atom({
  key: 'IsLoginInfo',
  default: {
    id: 1,
    email: '',
    password: '',
    name: '',
    role: '',
    grade: 1,
    classNum: 1,
    number: 1,
    subject: '',
    major: '',
    info: '',
    github: '',
    blog: '',
    insta: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const IsTaskModal = atom({
  key: 'IsTaskModal',
  default: false,
});
