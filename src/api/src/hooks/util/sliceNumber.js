export const slicePoint = (classNum, boyImage, girlImage) => {
  return classNum % 2 === 1 ? boyImage : girlImage;
};
