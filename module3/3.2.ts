{
  // oop - inheritence
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // -------
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. student", 20, "Uganda");
  //-----------------

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClas(numOfClass: number) {
      console.log(`${this.name} will thak ${numOfClass}`);
    }
  }

  const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");
  //   teacher.address
  //

}
