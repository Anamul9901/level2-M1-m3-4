{
  // type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student =
    //   {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     contactNo: string;
    //     address: string;
    //   }
    {
      name: "Mezba",
      age: 50,
      gender: "male",
      contactNo: "01734234234",
      address: "ctg",
    };

  const student2: Student =
    //   {
    //     name: string;
    //     age: number;
    //     gender: string;
    //     address: string;
    //   }
    {
      name: "Mir",
      age: 40,
      gender: "mail",
      address: "asdf",
    };

  const student3: Student = {
    name: "Mir2",
    age: 40,
    gender: "mail2",
    address: "asdf2",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Anamul";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
