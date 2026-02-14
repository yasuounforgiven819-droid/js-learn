interface objType {
  name: string;
  age: number;
  address: string;
}

const name: string = "Mayank";

const age: number = 34;

const address = "India";

const object: objType = {
  name: name,
  age: age,
  address: address,
};

console.log({ object: object });
