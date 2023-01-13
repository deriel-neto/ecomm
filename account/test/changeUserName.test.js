import { changeUserNameUseCase } from "../src/use-case/changeUserName.js";
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";

createUserUseCase("deriel", "deriel@pagonxt.com", "falsa");
createUserUseCase("neto", "neto@pagonxt.com", "fechado");

console.log(changeUserNameUseCase("email", "novo nome"));
console.log(changeUserNameUseCase("deriel@pagonxt.com", "novo nome"));
console.log(searchUserAccountByEmailUseCase("deriel@pagonxt.com"));