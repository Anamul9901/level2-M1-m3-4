{
  // mapped types

  const arrOfNumbers: number[] = [1, 3, 4];

  //   const arrOfStrings: string[] = ["1", "3", "4"];
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings); // ["1", "3", "4"]
  //----------------------

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     height: number;
  //     width: number;
  //   };
  type AreaString = {
    // [key in "height" | "width"]: string;
    [key in keyof AreaNumber]: string;
  };

  // ----------

  type AreaString2<T> = {
    [key in keyof T]: T[key];     // key=> T["width"]
  };

  const area1: AreaString2<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
