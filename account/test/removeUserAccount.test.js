import * as removeUserUseCase from '../src/removeUserAccount';
import createUserUseCase from '../src/createUserAccount';
import * as searchUserAccountByEmailUseCase from '../src/searchUserAccountByEmail';

createUserUseCase('deriel', 'deriel@pagonxt.com', 'falsa');
createUserUseCase('neto', 'neto@pagonxt.com', 'fechado');

console.log(removeUserUseCase('email'));
console.log(removeUserUseCase('deriel@pagonxt.com'));
console.log(searchUserAccountByEmailUseCase('deriel@pagonxt.com'));
