export const removeSpecialCharacters = inputString => {
  return inputString.replace(/[.\\/()-]/g, '');
};
