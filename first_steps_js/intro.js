// Declare variables
const name = "Samson";
const isDeveloper = true;
const gh_username = "markuptitan";
const isLearning = true;
const languages = ["javascript", "html", "css"];

// Create a function for generating languages
const generateLangs = (arr) => {
  if (arr.length === 0) {
    return `no languages as of now`;
  }
  const firstLangs = arr.slice(0, arr.length - 1).join(", ");
  const lastLang = arr[arr.length - 1];
  return `${firstLangs} and ${lastLang}`;
};

// Create a function for generating a string
const generateString = (name, devStatus, gh_user, learner, langs) => {
  if (!devStatus) {
    return `Hi, I am ${name}.`;
  }
  if (!learner && devStatus) {
    return `Hi, I am ${name}. I am a certified Software Developer.`;
  }
  return `Hi. I am ${name}, my github username is ${gh_user}. I am an upskilling Software Developer and I am learning ${generateLangs(
    langs
  )}.`;
};

// Test the main generateString function
console.log(
  generateString(name, isDeveloper, gh_username, isLearning, languages)
);
