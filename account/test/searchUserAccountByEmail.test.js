import searchUserAccountByEmailUseCase from '../src/searchUserAccountByEmail.js';
import createUserUseCase from '../src/createUserAccount.js';

createUserUseCase('deriel', 'deriel@pagonxt.com', 'falsa');
createUserUseCase('neto', 'neto@pagonxt.com', 'fechado');

console.log(searchUserAccountByEmailUseCase('email'));
console.log(searchUserAccountByEmailUseCase('deriel@pagonxt.com'));
