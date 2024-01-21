const MAPPING = {
  SPRAWDZIAN: 3,
  KARTKOWKA: 1,
  ODPOWIEDZ: 2,
};

const testData = [
  {
    grade: 6,
    weight: MAPPING.SPRAWDZIAN,
  },
  {
    grade: 2,
    weight: MAPPING.KARTKOWKA,
  },
];

const grades = [
  {
    grade: 5,
    weight: MAPPING.SPRAWDZIAN,
  },
  {
    grade: 4,
    weight: MAPPING.ODPOWIEDZ,
  },
  {
    grade: 2,
    weight: MAPPING.KARTKOWKA,
  },
  {
    grade: 6,
    weight: MAPPING.ODPOWIEDZ,
  },
  {
    grade: 1,
    weight: MAPPING.SPRAWDZIAN,
  },
];

const averageGrade = (grades) => {
  const gradesNo = grades
    .map((grade) => grade.weight)
    .reduce((acc, next) => acc + next, 0);

  const sum = grades
    .map((grade) => grade.grade * grade.weight)
    .reduce((acc, next, index, array) => {
      console.log("index,array", index, array);
      console.log("acc, next", acc, next);
      return acc + next;
    }, 0);

  return sum / gradesNo;
};

//unit test

if (averageGrade(grades) === 5) {
  console.log("test zaliczony");
}

if (averageGrade(grades) === (5 * 3 + 4 * 2 + 2 * 1 + 6 * 2 + 1 * 3) / 11) {
  console.log("test zaliczony");
}
