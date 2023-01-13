import { removeUserUseCase } from "../src/use-case/removeUserAccount.js";
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";

createUserUseCase("deriel", "deriel@pagonxt.com", "falsa");
createUserUseCase("neto", "neto@pagonxt.com", "fechado");

console.log(removeUserUseCase("email"));
console.log(removeUserUseCase("deriel@pagonxt.com"));
console.log(searchUserAccountByEmailUseCase("deriel@pagonxt.com"));