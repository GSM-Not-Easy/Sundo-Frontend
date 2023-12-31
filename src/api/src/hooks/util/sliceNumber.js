export const slicePoint = (number, boyImage, girlImage) => {
  return number % 2 === 1 ? boyImage : girlImage;
};
