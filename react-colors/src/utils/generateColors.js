export const random = (num) => {
  const rand = Math.floor(Math.random() * num);
  return rand;
};

export const generateRandomColors = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};

export const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
  //   return "rgb(" + red + ", " + green + ", " + blue + ")";
};
