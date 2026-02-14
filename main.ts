interface objType {
  name: string;
  age: number;
  address: string;
  sex: string;
}

const name: string = "Mayank";

const age: number = 34;

const address = "India";

const sex = "Male";

const object: objType = {
  name: name,
  age: age,
  address: address,
  sex: sex,
};

console.log({ object: object });
