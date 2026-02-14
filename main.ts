interface objType {
  name: string;
  age: number;
  reason: string;
}

const name: string = "Mayank";

const age: number = 34;

const reason = "Not Well";

const object: objType = {
  name: name,
  age: age,
  reason: reason,
};

console.log({ object: object });
