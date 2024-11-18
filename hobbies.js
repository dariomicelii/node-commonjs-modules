hobby1 = "musica";
hobby2 = "scacchi";
hobby3 = "pittura";

function hobbiesObject(hobby1, hobby2, hobby3) {
  const myHobbiesObject = {
    hobbies: [hobby1, hobby2, hobby3],
  };
  console.log(myHobbiesObject);
  return myHobbiesObject;
}

hobbiesObject(hobby1, hobby2, hobby3);

module.exports = hobbiesObject;
