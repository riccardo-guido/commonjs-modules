import { personNames } from "./names.js";
import { personHobbies } from "./hobbies.js";

function createPerson() {
  const person = personNames("Riccardo", "Guido");
  const hobbies = personHobbies("Tecnologia", "Nuoto", "Mtb");

  return {
    fullName: `${person.firstName} ${person.lastName}`,
    hobbies: hobbies,
  };
}

const person = createPerson();
console.log(person);
