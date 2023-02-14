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
}

export default AccountController;