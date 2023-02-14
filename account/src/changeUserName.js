import { accounts } from "./createUserAccount.js"

export function changeUserNameUseCase(email, newName){
    let user = accounts.filter((account) => account.email.toUpperCase() === email.toUpperCase());
    if(user.length > 0){
        user[0].name = newName;
        return true;
    }
    return false;
    
}