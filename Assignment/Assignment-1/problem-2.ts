const findLargestNumber = (num: number[]): number => {
  return Math.max(...num);
};

const result2: number = findLargestNumber([10, 5, 8, 20, 3]);
console.log(result2);
