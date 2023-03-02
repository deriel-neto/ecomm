import Accounts from '../models/Account';

class AccountController {
    static listAccounts = (req, res) => {
        Accounts.find((err, account) => {
            if (err) {
                return res.status(500).send({ message: err.message });
            }
            return res.status(200).json(account);
        });
    };

    static registerAccounts = (req, res) => {
        const account = new Accounts(req.body);

        account.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastra account` });
            } else {
                res.status(201).send(account.toJSON());
            }
        });
    };

    static listAccountsById = (req, res) => {
        const { id } = req.params;
        Accounts.findById(id, (err, account) => {
            if (err) {
                res.status(404).send({ message: `${err.message} - Account não encontrada` });
            } else {
                res.status(200).json(account);
            }
        });
    };

    static updateAccountsById = (req, res) => {
        const { id } = req.params;
        Accounts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Account atualizado com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static deleteAccountsById = (req, res) => {
        const { id } = req.params;
        Accounts.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Account removido com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };
}

export default AccountController;
