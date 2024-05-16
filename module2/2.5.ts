{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const resGeneric = createArrayWithGeneric<boolean>(true);
  //   const resGenericObj = createArrayWithGeneric<object>({
  //     id: 222,
  //     name: "Me.X",
  //   });

  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Me.X",
  });

  //----------------------

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 9071);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  //-----------------------

  const addCoutseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCoutseToStudent({
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCoutseToStudent({
    name: "Mr.Y",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });

  //
}
