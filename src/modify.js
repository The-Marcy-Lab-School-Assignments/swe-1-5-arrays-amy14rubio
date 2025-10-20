const uppercaseAll = (...words) => {
  const newWords = new Array(words.length);
  for (const i in words) newWords[i] = words[i].toUpperCase();
  return newWords;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
