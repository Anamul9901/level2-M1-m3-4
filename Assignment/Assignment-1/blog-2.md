# Title: Type Guards Necessity and Type of type guards

In TypeScript, variables and functions have multiple types, like string, number, boolean etc. When we declare a function where the function needs a number, and if we call a string for this function then we get an error. Type guards solve this problem. We can check all types by Type-Guard before running the function. And if the type is not match then we can handle it without error.



## Types of Type Guards

### typeof Type Guard
The typeof type-guard checks the type of a variable at runtime. It's used to differentiate between strings, numbers, bolleans and symbols.

```typescript
const checkType1 = (value: any) => {
    if (typeof value === "string") {
      console.log("String value", value);
    } else if (typeof value === "number") {
      console.log("number value", value);
    }
  };

  checkType1("hi");
  checkType1(2);
```

### instanceof Type Guard
The instanceof type guard simply checks if an object belongs to a particular class or constructor function.

```typescript
  class Animal{}
  class Dog extends Animal{}

  const isDog = (animal: Animal){
      return animal instanceof Dog;
  }

  const animal = new Animal();
const dog = new Dog();

console.log(isDog(animal)); // Output: false
console.log(isDog(dog)); // Output: true
```

### Custom Type Guard
Custom type guards are functions made by users that confirm a variable's type using custom rules.

```typescript
   type Car = {
    make: string;
    model: string;
}

const isNew = (car): car is Car {
    return car.make === "Tesla" || car.make === "Nissan";
}
const myCar: Car = { make: "Tesla", model: "Model S" };

if (isNew(myCar)) {
console.log("It's a new car!");
} else {
console.log("It's not a new car.");
}
```


## Use Cases of Type Guards
1. Input Validation: Checking if function parameters are the correct types before using them.
2. Serialization/Deserialization: onfirming that data is in the right format before saving or using it, like converting objects to strings and back.
3. API Responses: Making sure data from external sources like APIs is what we expect before using it.