firstName = "Dario";
lastName = "Miceli";

function namesObject(firstName, lastName) {
  let names = {
    firstName,
    lastName,
  };
  console.log(names);
  return names;
}
namesObject(firstName, lastName);
module.exports = namesObject;
