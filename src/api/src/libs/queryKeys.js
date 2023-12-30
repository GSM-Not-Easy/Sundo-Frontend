export const authQueryKeys = {
  login: () => ['login'],
  signUpTeacher: () => ['signup', 'teacher'],
  signUpStudent: () => ['signup', 'student'],
};

export const portfolioQuerykeys = {
  postPortfolio: () => ['portfolio'],
  getPortfolio: (grade, classNum, keyword) => [
    'portfolio',
    'list',
    grade,
    classNum,
    keyword,
  ],
  getPortfolioDetail: (id) => ['portfolio', 'detail', id],
  patchPortfolio: (id) => ['portfolio', 'modify', id],
  deletePortfolio: (id) => ['portfolio', 'delete', id],
};

export const weeQueryKeys = {
  createWeeRoom: () => ['wee', 'create'],
  postWeeRoom: (room_id) => ['wee', 'post', room_id],
  getWeeRoom: (room_id) => ['wee', 'get', room_id],
  getWeeRoomTeacher: () => ['wee', 'list', 'teacher'],
  getMyWeeRoomStudent: () => ['wee', 'student'],
};

export const foodQueryKeys = {
  postFood: () => ['food', 'post'],
  getFood: () => ['food', 'list'],
};
