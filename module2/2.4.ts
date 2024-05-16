{
  //

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type NoBrandWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<NoBrandWatch, null> = {
    name: "Anamul",
    computer: {
      brand: "Ryzen",
      model: "5 5600g",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "noBrand",
      model: "model nai",
      display: "eida o nai",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YamahBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahBike> = {
    name: "Ami nah",
    computer: {
      brand: "Intel",
      model: "11",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "model nai",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamah",
      engineCapacity: "100cc",
    },
  };
  //
}
