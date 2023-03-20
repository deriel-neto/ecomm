import { accounts } from './createUserAccount.js';

export default function searchUserAccountByEmailUseCase(email) {
    const filter = accounts.filter((act) => act.email.toUpperCase() === email.toUpperCase());
    if (filter.length > 0) {
        return filter;
    }
    return `Nenhum usuaria encontrado com esse email: ${email}`;
}
