{
  // static

  class Counter {
    static count: number = 0;
    increment() {
      //   return (this.count = this.count + 1);   // static use korle this er jigy class er nam lekte hobe
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      //   return (this.count = this.count - 1);
      return (Counter.count = Counter.count - 1);
    }
  }

  // 2 ta instance create korar karone 2 ta different memory te save hobe. tai protibar notun kore data chang hobe.
  // same memory te save korte hole count er age static lekte hobe. tahole data jotobar call hoi totobar update hobe.
  const instance1 = new Counter();
  console.log(instance1.increment()); // 1 --> different memory

  const instance2 = new Counter();
  console.log(instance2.increment()); // 1 (static use korle hobe 2) --> different memory (static use korle same memory)
  console.log(instance2.increment()); // 2 (static use korle hobe 3) 

//   const instance3 = new Counter();
//   console.log(instance3.decrement());
  console.log(Counter.decrement());   // decrement e static use korle aivabe
  //
}
