const getTestAverage = (obj, testTotal) => {
  let sum = obj.map((a) => a["mark"]).reduce((a, b) => a + b);
  let totalMarks = testTotal * obj.length;
  let testAverage = sum / totalMarks;
  let percentage = testAverage * 100;

  return percentage;
};
