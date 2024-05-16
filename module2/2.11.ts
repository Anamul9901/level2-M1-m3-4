{
  // utility type

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;
  //----------------------

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">; // omit name r age er type bad bede
  //--------------------

  // Required ( sob gula property k require kore new type create korbe)
  type PresonRequired = Required<Person>;
  //------------------

  // Partial ( sob gula property k optional kore new type create korbe)
  type PersonPartial = Partial<Person>;
  //------------------

  // ReadOnly ( only read korte parbe, chang korte parbe nah emon type create korbe)
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "Mr. X",
    age: 200,
    contactNo: "3434",
  };
  //   person1.name = "Mr.Y";
  //---------------

  //Record
  type MyObj = {
    a: string;
    b: string;
  };

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    // c: "cc"    //  type er base key lekte parbo nah
  };

  // solved by Record
//   type MyObj2 = Record<string, string>;
  type MyObj2 = Record<string, unknown>;
  const obj2: MyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 34
  };
  //
}
