import { accounts } from './createUserAccount';

export default function rveUserUseCase(email) {
    const user = accounts.filter((account) => account.email.toUpperCase() === email.toUpperCase());
    if (user.length > 0) {
        const index = accounts.indexOf(user[0]);
        accounts.splice(index, 1);
        return true;
    }
    return false;
}
