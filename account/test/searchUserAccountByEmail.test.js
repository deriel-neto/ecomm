import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

createUserUseCase("deriel", "deriel@pagonxt.com", "falsa");
createUserUseCase("neto", "neto@pagonxt.com", "fechado");

console.log(searchUserAccountByEmailUseCase("email"));
console.log(searchUserAccountByEmailUseCase("deriel@pagonxt.com"));