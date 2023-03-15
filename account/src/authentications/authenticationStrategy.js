import passport from 'passport';
import LocalStrategy from 'passport-local';
import Accounts from '../models/Account.js';
import bcryptjs from 'bcryptjs';

function checkUser(user) {
    if (!user) {
        throw new Error('email incorreto');
    }
}

async function checkPassword(senha, hashSalt) {
    const validPassword = await bcryptjs.compare(senha, hashSalt);
    if (!validPassword) {
        throw new Error('email ou senha incorretos');
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) => {
        try{
            const user = await Accounts.findOne({email});
            checkUser(user);
            await checkPassword(senha, user.senha);
            
            done(null, user);
        } catch (error) {
            done(error);
        }
    })
)