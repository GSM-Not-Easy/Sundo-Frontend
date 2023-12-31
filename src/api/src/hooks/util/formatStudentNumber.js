export const formatStudentNumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};
