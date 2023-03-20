import bcryptjs from 'bcryptjs';

function passwordEncrypted(senha) {
    const salt = bcryptjs.genSaltSync(10);
    const passwordAndHash = bcryptjs.hashSync(senha, salt);
    return passwordAndHash;
}

export default passwordEncrypted;
