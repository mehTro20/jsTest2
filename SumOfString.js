const getSumOfString = (s) => {
  return s
    .split("")
    .filter((x) => Number(x))
    .map((a, b) => Number(a, b))
    .reduce((a, b) => a + b);
};

