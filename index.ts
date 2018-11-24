const name = "hyuk",
      age = 26,
      gender = "male";

const introduce = (name, age, gender?) => {
  console.log(`Hi, my name is ${name}.\nI am ${age} years old and ${gender}.`);
}

introduce(name, age);

export {};