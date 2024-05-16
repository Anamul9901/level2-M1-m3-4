type GenericArray<T> = T[];
const reverseArray = <T>(elements: GenericArray<T>): GenericArray<T> => {
  return elements.reverse();
};

const result4 = reverseArray(["apple", "banana", "cherry"]);
console.log(result4);
