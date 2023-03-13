import { accounts } from './createUserAccount';

export default function changeUserNameUseCase(email, newName) {
    const user = accounts.filter((account) => account.email.toUpperCase() === email.toUpperCase());
    if (user.length > 0) {
        user[0].name = newName;
        return true;
    }
    return false;
}
