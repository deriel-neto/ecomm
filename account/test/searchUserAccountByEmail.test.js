import searchUserAccountByEmailUseCase from '../src/searchUserAccountByEmail';
import createUserUseCase from '../src/createUserAccount';

createUserUseCase('deriel', 'deriel@pagonxt.com', 'falsa');
createUserUseCase('neto', 'neto@pagonxt.com', 'fechado');

console.log(searchUserAccountByEmailUseCase('email'));
console.log(searchUserAccountByEmailUseCase('deriel@pagonxt.com'));
