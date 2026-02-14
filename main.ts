interface objType {
  name: string;
  age: number;
}

const name: string = "Mayank";

const age: number = 34;

const object: objType = {
  name: name,
  age: age,
};

console.log({ object: object });
