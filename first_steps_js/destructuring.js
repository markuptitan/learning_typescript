// String destructuring
const stringOfLangs = "html, css, javascript, typescript";
const langsArray = stringOfLangs.split(",").map((lang) => lang.trim());
const [first, second, third, fourth] = langsArray;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Array destructuring
const langs = ["html", "css", "jsvascript", "typescript"];
const [firstLang, secondLang, thirdLang, fourthLang] = langs;
console.log(firstLang);
console.log(secondLang);
console.log(thirdLang);
console.log(fourthLang);

// Object destructuring
const person = {
  name: "Samson",
  age: 22,
  job: "Web Developer",
  contact: {
    email: "samsonlukhele76@gmail.com",
    whatsapp: "wa.me/27665417071",
  },
};
const {
  name,
  age,
  job,
  contact: { email, whatsapp = "Not available" },
} = person;

console.log(
  `name: ${name}\nage: ${age}\njob: ${job}\nemail: ${email}\nWhatsApp: ${whatsapp}`
);
