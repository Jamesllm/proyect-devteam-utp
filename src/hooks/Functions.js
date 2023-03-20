export const countArray = (data) => {
  const initalArray = data.at(0).id;
  const endArray = data.at(-1).id;

  return [initalArray, endArray];
};

export const numberAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
