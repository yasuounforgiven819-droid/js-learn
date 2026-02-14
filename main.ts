interface objType {
  name: string;
  age: number;
  reason: string;
  address: string;
  pincode : string;
}

const name: string = "Mayank";

const age: number = 34;

const reason: string = "Not Well";

const address: string = "Delhi";

const pincode : string = "AASSDD";

const object: objType = {
  name: name,
  age: age,
  reason: reason,
  address: address,
  pincode : pincode
};

console.log({ object: object });
