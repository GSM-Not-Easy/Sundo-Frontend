export const authUrl = {
  signUpTeacher: () => `/auth/teacher`,
  signUpStudent: () => `/auth/student`,
  login: () => `/auth/login`,
  refresh: () => `/auth/refresh`,
};

export const portfolioUrl = {
  portfolio: () => `/portfolio`,
  portfolioId: (id) => `/portfolio/${id}`,
};

export const weeUrl = {
  createRoom: () => `/wee/room`,
  room: (room_id) => `/wee/room/${room_id}`,
  teacherAllRoom: () => `/wee/room`,
  studentMyRoom: () => `/wee/room/my`,
};

export const foodUrl = {
  food: () => `/food`,
};
