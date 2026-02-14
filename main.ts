interface objType {
  name: string;
  age: number;
  reason: string;
  address: string;
}

const name: string = "Mayank";

const age: number = 34;

const reason: string = "Not Well";

const address: string = "Delhi";

const object: objType = {
  name: name,
  age: age,
  reason: reason,
  address: address
};

console.log({ object: object });
