{
    
    // Learning function
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method (onject er maje function thakle take method bole)

const poorUser = {
  num: "Mezba",
  balance: 0,
  addbalance(myBalance: number): number {
    return this.balance + myBalance;
  },
};

const arr: number[] = [1, 3, 5];

const newSquarArr: number[] = arr.map((elem: number): number => elem * elem);


}