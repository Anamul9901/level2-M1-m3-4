# The Significance of Union and Intersection Types in TypeScript

## Union Types

In TypeScript, we can declare multiple types in a variable by Union Types. When we need to declear a multiple types in a variable then normally we use 'any' type of the variable. But it risking runtime errors. TypeScript give us this solution by Union Types.


### Declaring Multiple Types with Union Types:

```typescript
type UnionType = string | number;

const anyFunction = (value: UnionType): UnionType => {
  return value;
};

anyFunction("call this function");
anyFunction(12);
```

## Intersection Types

When we need to create a single type by combining multiple types then we can use this Intersection Types. If we have two types, like type-1 and type-2 and we need to create a type-3 which we want to assign to type-1 and type-2 declared variables then we can easily create type-3 from type-1 and type-2 by using Intersection Types.

### Declaring Intersection Types:

```typescript
type Car = {
    name: string;
    model: string;
};
type New = {
    isNew: boolean;
    release: number;
};

type NewCar = Car & New;

const myCar: NewCar = {
    name: "Toyota",
    model: "23T",
    isNew: false,
    release: 2015,
};
```

Using Union and Intersection Types in TypeScript allows developers to write code that's shorter and safer. This makes it easier to trust and maintain their applications.