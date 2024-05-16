const repeatString = (name: string, repet: number): string => {
  var updateString: string = "";

  for (let i = 0; i < repet; i++) {
    updateString = updateString + name;
  }
  return `"${updateString}"`;
};

const result: string = repeatString("Hello!", 3);
console.log(result);
