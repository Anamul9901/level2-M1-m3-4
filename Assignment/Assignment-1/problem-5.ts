type Student = {
  name: string;
  age: number;
  grades: number[];
};

const calculateAverageGrade = (students: Student): number => {
  let totalGreade: number = 0;
  const totalSubject: number[] = students.grades;
  for (let i = 0; i < totalSubject.length; i++) {
    totalGreade = totalGreade + totalSubject[i];
  }
  let avarageGrade: number = totalGreade / totalSubject.length;
  return avarageGrade;
};

const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};

const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);
