class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  //method
  displayInfo() {
    return `"Your car model is: ${this.year} ${this.brand} ${this.model}"`;
  }
}

const result8 = new Car("Toyota", "Corolla", 2020);
console.log(result8.displayInfo());
