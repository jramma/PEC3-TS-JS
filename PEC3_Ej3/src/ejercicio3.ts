abstract class Animal {
  static population: number = 0;
  constructor() {
    Animal.population++;
  }
  public abstract sound(): void;
}

class Dog extends Animal {
  color: string;

  constructor(color: string) {
    super();
    this.color = color;
  }

  public sound() {
    console.log("WOW");
  }

  public iamadog() {
    console.log("yes, this is a dog");
  }
}

class Cat extends Animal {
  gender: string;

  constructor(gender: string) {
    super();
    this.gender = gender;
  }

  public sound() {
    console.log("MEOW");
  }

  public iamacat() {
    console.log("yes, this is a cat");
  }
}

let animals: Animal[] = [];
animals.push(new Cat("male"));
animals.push(new Dog("white"));
animals.push(new Cat("female"));
animals.push(new Dog("black"));

for (let animal of animals) {
  animal.sound();
  if (animal instanceof Cat) {
    animal.iamacat();
  } else if (animal instanceof Dog) {
    animal.iamadog();
  }
}

console.log(Animal.population); //4
