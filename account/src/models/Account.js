import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    _id:false,
    rua: {type: String, required: true},
    numero: {type: String, required: true},
    complemento: {type: String},
    cep: {type: String, required: true, match: /^\d{8}$/},
    bairro: {type: String},
    cidade: {type: String, required: true},
    estado: {type: String, required: true,
        enum: [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]},
});
const accountSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, match: /^[A-z0-9'"!@#$%¨&*\(\)\-_=+´`~^;:/.,<>{|}\\]+@[A-z0-9](?:[A-z0-9-]{0,255}[A-z0-9])?(?:\.[A-z0-9](?:[A-z0-9-]{0,255}[A-z0-9])?)*$/},
    senha: {type: String, required: true, match: /^(?=.*[A-z])(?=.*\d)(?=.*['"!@#$%¨&*\(\)\-_=+´`~^;:/.,<>{|}\\])[A-z\d'"!@#$%¨&*\(\)\-_=+´`~^;:/.,<>{|}\\]{8,255}$/},
    cpf: {type: String, required: true, match: /^\d{11}$/},
    telefone:{type: String},
    endereco: { type: addressSchema, required: true},
    data: {type: Date},
});


const accounts = mongoose.model("accounts", accountSchema);

export default accounts;