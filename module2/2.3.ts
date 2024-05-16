{
  // generic type

  //   const rollNumber: number[] = [1, 2, 3];
  const rollNumber: Array<number> = [1, 2, 3];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const bollArray: boolean[] = [true, false, true];
  const bollArray: Array<boolean> = [true, false, true];

  //----------------------------

  type GenericArray<T> = Array<T>;

  //   const rollNumber1: Array<number> = [2, 3, 4];
  const rollNumber1: GenericArray<number> = [2, 3, 4];

  //   const mentors2: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors2: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const bollArray2: Array<boolean> = [true, false, true];
  const bollArray2: GenericArray<boolean> = [true, false, true];

  // genericArray like
  const add = (x: number, y: number) => x + y;
  add(30, 20);

  //------
  type User = {
    name: string;
    age: number;
  };
  interface UserInt {
    name: string;
    age: number;
  }
  const user: GenericArray<UserInt> = [
    {
      name: "Mezba",
      age: 30,
    },
    {
      name: "Jhankar Mahbub",
      age: 34,
    },
  ];

  //---------------------------------

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.X", "Mis.Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "asdf", email: "adsa@mgail.com" },
  ];
}
