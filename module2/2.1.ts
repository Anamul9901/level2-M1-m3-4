{
  // type assertion
  let anything: any;

  anything = "Next level web development";
  //   (anything as string). // as dya type nerdharon kore dele . er pore suggest korbe

  const KgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = KgToGm(1000) as number;
  const result2 = KgToGm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
