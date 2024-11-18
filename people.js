const namesObject = require("./names");
const hobbiesObject = require("./hobbies");

let yourProfile = () => {
  let profile = {
    firstName: namesObject(firstName, lastName),
    hobbies: hobbiesObject(hobby1, hobby2, hobby3),
  };
  return console.log(profile);
};

yourProfile();
