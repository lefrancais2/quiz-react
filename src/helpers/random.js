export const selectNumbers = (size = 250, numbers = 4) => {
  const arr = [];
  let i = 0,
    value = false;
  while (i < numbers) {
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

const existeNumInArray = (arr, numero) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numero) return true;
  }
  return false;
};

export const selectCountriesByRegion = (
  countries,
  answers,
  region = "America"
) => {
  const arr = [];
  for (let i = 0; i < 4; ) {
    let numero = Math.floor(Math.random() * countries.length);
    if (existeNumInArray(arr, numero)) {
      continue;
    }
    if (countries[numero].region !== region && i !== answers) {
      arr.push(numero);
      i++;
    }
    if (i === answers && countries[numero].region === region) {
      arr[i] = numero;
      i++;
    }
  }
  return arr;
};

export const selectNotCountriesByRegion = (countries, region = "America") => {
  const arr = [];
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].region === region) {
      arr.push(i);
    }
  }
  return arr;
};

export const questionsReally = (
  index,
  firstMax,
  questions,
  answers,
  countries
) => {
  for (let i = index; i < firstMax; i++) {
    questions.push(selectNumbers(countries.length, 4));
    answers.push(Math.floor(Math.random() * 4));
  }
};

export const questionsRegions = (
  regions,
  whatRegions,
  answers,
  questions,
  countries
) => {
  for (let i = 8; i < 12; i++) {
    let aux = Math.floor(Math.random() * 5);
    let continentes =
      regions[aux] === "Americas"
        ? "America"
        : regions[aux] === "Europe"
        ? "Europa"
        : regions[aux];
    whatRegions.push(continentes);
    answers.push(Math.floor(Math.random() * 4));
    questions.push(
      selectCountriesByRegion(countries, answers[i], regions[aux])
    );
  }
};
