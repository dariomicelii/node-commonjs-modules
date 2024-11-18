const namesObject = require("./names");
const hobbiesObject = require("./hobbies");

let yourProfile = () => {
  let person = namesObject("Dario", "Miceli");
  let hobbies = hobbiesObject("musica", "pittura", "scrittura");

  let profile = {
    firstName: person.firstName,
    lastName: person.lastName,
    hobbies: hobbies.hobbies,
  };
  return console.log(profile);
};

yourProfile();
