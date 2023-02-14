import accounts from "../models/Account.js";

class AccountController {

    static listAccounts = (req, res) => {
        accounts.find((err, accounts) => {
            if(err){
                res.status(500).send({message: err.message})
            } else{
                res.status(200).json(accounts)
            } 
        })
    }
    static registerAccounts = (req, res) => {
        let account = new accounts(req.body);

        account.save((err) =>{

            if(err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastra account`});
            } else {
                res.status(201).send(account.toJSON());
            }
        })
    }
}

export default AccountController;