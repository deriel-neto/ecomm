import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    rua: {type: String, required: true},
    numero: {type: String, required: true},
    complemento: {type: String},
    cep: {type: String},
    bairro: {type: String},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
});
const accountSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String},
    cpf: {type: String},
    telefone:{type: String},
    endereco: { type: addressSchema, required: true},
    data: {type: Date},
});


const accounts = mongoose.model("accounts", accountSchema);

export default accounts;