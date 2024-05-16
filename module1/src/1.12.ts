{
  // nullable types / unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  //unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`1. The speed is ${convertedSpeed} ms^-1`);
    }

    if (typeof value === "string") {
      //   const valueInNumber = value.split(" "); // split use korle number r string 2 ta alada console hobe ([ '1000', 'kmh^-1' ])
      //   console.log(valueInNumber);

      const [result, unit] = value.split(" "); // destucture
      console.log(result, unit);
      const convertedSpeed = (parseFloat(value) * 1000) / 3600;
      console.log(`2. The speed is ${convertedSpeed} ms^-1`);
    }
  };
    // getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond(`1000 kmh^-1`);
  //
}
