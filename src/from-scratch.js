const addToFrontOrBack = (arr, value, isFront) => {
  isFront === true ? arr.unshift(value) : arr.push(value);
};

const reverseString = (string) => {
  let arr = string.split("");
  return arr.reverse().join("");
};

const newArrayFullOf = (value, numOfValue) => {
  const newArr = new Array(numOfValue).fill(value, 0, numOfValue);
  return newArr;
};

const insertIntoMiddle = (arr, value) => {
  const middle = arr.length / 2;
  return arr.splice(middle, 0, value);
};

const deleteFromMiddle = (arr) => {
  const middle = arr.length / 2;
  return arr.splice(middle, 1);
};

const isRightIndex = (arr, value, index) => {
  return value === arr[index] ? true : false;
};

const roundAllNumsDown = (arr) => {
  let newArr = new Array(arr.length);
  for (const i in arr) newArr[i] = Math.floor(arr[i]);
  return newArr;
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = new Array(arrOfCoords.length);
  for (const i in arrOfCoords) newArr[i] = arrOfCoords[i][1];
  return newArr;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
