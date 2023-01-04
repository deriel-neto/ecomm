let accounts = [];

export function createUserUseCase(nome, email, senha){
    let user = {
        id: accounts.length + 1,
        name: nome,
        email: email,
        password: senha,
        createdDate: new Date().toLocaleDateString(),
    }
    accounts.push(user);
    return user;
}

// export default createUserUseCase();