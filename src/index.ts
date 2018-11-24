interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "hyuk",
  age: 26,
  gender: "male"
};

const introduce = (person: Human): string => {
  return `Hi, my name is ${person.name}.\nI am ${person.age} years old and ${
    person.gender
  }.`;
};

console.log(introduce(person));

export {};
