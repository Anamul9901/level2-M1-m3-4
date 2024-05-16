{
  // generic costraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle; // Owner er type er same.

  const person1: Owner = "bike";
  const person2: Owner2 = "car";
  //----------------

  const user = {
    name: "Mr. C",
    age: 26,
    address: "ctg",
  };
  //   const name1= user['name'];  // Mr. C

  const car = {
    model: "Toyota 100",
    year: 200,
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "model");
  //
}
