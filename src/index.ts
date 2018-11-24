class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const hyuk = new Human("hyuk", 26, "male");

const introduce = (person: Human): string => {
  return `Hi, my name is ${person.name}.\nI am ${person.age} years old and ${
    person.gender
  }.`;
};

console.log(introduce(hyuk));

export {};
