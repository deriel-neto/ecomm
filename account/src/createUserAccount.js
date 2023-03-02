export const accounts = [];

export function createUserUseCase(nome, email, senha) {
    const user = {
        id: accounts.length + 1,
        name: nome,
        email,
        password: senha,
        createdDate: new Date().toLocaleDateString(),
    };
    accounts.push(user);
    return user;
}
