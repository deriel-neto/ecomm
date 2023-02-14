import { accounts } from "./createUserAccount.js"

export function removeUserUseCase(email){
    let user = accounts.filter((account) => account.email.toUpperCase() === email.toUpperCase());
    if(user.length > 0){
        let index = accounts.indexOf(user[0]);
        accounts.splice(index, 1);
        return true;
    }
    return false;
    
}