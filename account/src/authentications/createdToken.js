import jwt from 'jsonwebtoken';

function createdToken(account) {
    const payload = {
        id: account._id
    };

    const token = jwt.sign(payload, process.env.CHAVE_JWT);
    return token
}

export default createdToken;
