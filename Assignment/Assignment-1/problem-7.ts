type Alphaneumeric = number | string;

const logString = (param: Alphaneumeric): Alphaneumeric => {
  if (typeof param === "string") {
    return `"${param}"`;
  } else {
    const errorMessage = "Input is not a string.";
    return errorMessage;
  }
};

const result7 = logString("Hello, TypeScript!");
console.log(result7);
