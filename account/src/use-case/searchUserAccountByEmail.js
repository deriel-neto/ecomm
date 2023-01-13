import { accounts } from "./createUserAccount.js"

export function searchUserAccountByEmailUseCase(email){
    let filtro = accounts.filter((account) => account.email.toUpperCase() === email.toUpperCase());
    if(filtro.length > 0){
        return filtro
    }
    return `Nenhum usuaria encontrado com esse email: ${email}`
    
    
}