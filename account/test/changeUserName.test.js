import * as changeUserNameUseCase from '../src/changeUserName';
import createUserUseCase from '../src/createUserAccount';
import * as searchUserAccountByEmailUseCase from '../src/searchUserAccountByEmail';

createUserUseCase('deriel', 'deriel@pagonxt.com', 'falsa');
createUserUseCase('neto', 'neto@pagonxt.com', 'fechado');

console.log(changeUserNameUseCase('email', 'novo nome'));
console.log(changeUserNameUseCase('deriel@pagonxt.com', 'novo nome'));
console.log(searchUserAccountByEmailUseCase('deriel@pagonxt.com'));
