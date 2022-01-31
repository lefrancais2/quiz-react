export const selectNumbers = (size = 250) => {
  const arr = [];
  let i = 0,
    value = false;
  while (i < 4) {
    let num = Math.floor(Math.random() * size);
    for (let j = 0; j < arr.length; j++) {
      if (num === arr[j]) {
        value = true;
        break;
      }
    }
    if (!value) {
      arr.push(num);
      i++;
    }
    value = false;
  }
  return arr;
};
