// Declaring variables
// Booleans
let isLoading: boolean = false;
let isUserValid: boolean = false;

// Numbers
let age: number = 22;
let hex: number = 0xf00d;
let totalUsers: number = 1000;

// Strings
let firstName: string = "Samson";
let lastName: string = "Lukhele";
let fullName: string = `${firstName} ${lastName}`;

// Arrays

// number[] ensures only numbers are in this array
let numsArray: number[] = [1, 2, 3, 4, 5];

// string[] ensures only strings are pushed in this array
let namesArray: string[] = ["Samson", "Sphamandla", "Markuptitan"];

// boolean[] ensures only boolean values are in this array
let booleanCountArray: boolean[] = [true, false, false, true, true];

// type[][] will ensure we have a nested array
let groups: string[][] = [
  ["Samson", "John", "Sipho"],
  ["Hugh", "Steve", "Cole"],
  ["Jack", "Peter", "Welcome"],
];

// Tuples

// Creating a tuple type
let detailsTemplate: [number, string];
detailsTemplate = [1, "Samson Lukhele"];
const detailsString: string = `${detailsTemplate[0]}. ${detailsTemplate[1]}`;
// Trying a "nested tuple"
let scoreBoard: [
  [number, string],
  [number, string],
  [number, string],
  [number, string]
];
scoreBoard = [
  [1, "Samson Lukhele"],
  [2, "Sphamandla Mdluli"],
  [3, "markuptitan"],
  [4, "Spha"],
];

// Looping through the nested Tuples
for (const [score, name] of scoreBoard) {
  console.log(`Score: ${score}, Name: ${name}`);
}

// Unknown
// Declaring an unknown data type variable
let unclearDataType: unknown = { data: true };

// Assign different data type variables to unclearDataType
unclearDataType = true;
unclearDataType = null;
unclearDataType = `It is still unclear but the last datatype was ${typeof unclearDataType}`;

// Objects
// Basic object creation
let person: { name: string; age: number; gender: string; interests: string[] };
person = {
  name: "Samson Lukhele",
  age: 22,
  gender: "male",
  interests: ["Basketball", "DevOps", "Linux Admin", "Web Dev 101"],
};

// Using type aliases
type PersonType = {
  name: string;
  age: number;
  gender: string;
  interests: string[];
};

let strictPerson: PersonType = {
  name: "Samson Lukhele",
  age: 22,
  gender: "male",
  interests: ["Basketball", "DevOps", "Linux Admin", "Web Dev 101"],
};
