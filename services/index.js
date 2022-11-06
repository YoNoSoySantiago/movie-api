import jwt from 'jsonwebtoken';

const createAccessToken = ({ username, password }) => {
    return jwt.sign({
        data: { username, password }
    }, 'secret', { expiresIn: '2h' });
}

const decodeAccessToken = (token) => {
    try {
        const decoded = jwt.decode(token);
        return decoded;
    } catch(error) {
        console.log(error);
    }
}

export {
    createAccessToken,
    decodeAccessToken
}