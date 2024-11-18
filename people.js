const namesObject = require("./names");
const hobbiesObject = require("./hobbies");

let yourProfile = () => {
  let profile = {
    firsName: "dario",
    lastName: "miceli",
    hobbies: hobbiesObject,
  };
  return console.log(profile);
};

yourProfile();
