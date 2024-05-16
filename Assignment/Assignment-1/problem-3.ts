const filterEvenNumbers = (num: number[]): number[] => {
  const filterNum: number[] = num?.filter((numbers: number) => numbers % 2 === 0);
  return filterNum;
};

const result3: number[] = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result3);
