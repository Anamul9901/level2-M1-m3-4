{
  // opp - class
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = name;
      this.sound = sound;
    }

    // all time normal function use korte hobe
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
  //   dog.name
  const cat = new Animal("Persian bhai", "cat", "meaw meaw");
  //   cat.sound
  cat.makeSound();
  //   dog.makeSound();

  //---------------------------
  // class ke parameter properties er maddome aro chuto kora jai

  class Animal2 {
    // name: string;
    // species: string;
    // sound: string;

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = name;
      //   this.sound = sound;
    }

    // all time normal function use korte hobe
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const dog2 = new Animal2("German Shepard Bhai", "dog", "Ghew Ghew");
  dog2.makeSound();
  //
}
