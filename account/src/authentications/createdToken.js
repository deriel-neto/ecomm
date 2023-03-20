import jwt from 'jsonwebtoken';

function createdToken(account) {
    const payload = {
        /* eslint-disable no-underscore-dangle */
        id: account._id,
    };

    const token = jwt.sign(payload, process.env.CHAVE_JWT);
    return token;
}

export default createdToken;
