{
  // interface ( typer er poriborte interface use korte parbo)

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "Anamul Haque",
    age: 20,
  };

  type UserWithRole1 = User1 & { role: string }; // type er khetre & ar interface er khetre extends dya
  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user3: UserWithRole2 = {
    name: "asdf",
    age: 34,
    role: "123",
  };

  //--------------------

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  //----------------

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
