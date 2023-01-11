const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: {
        type: String,
    },
    documento: {
        type: String,
    },
    idade: {
        type: String,
    },
    genero: {
        type: String
    },
    email: {
        type: String,
    },
    contato: {
        type: String,
    },
    observacao: {
        type: String
    },
    cargo: {
        type: String,
    },
    senha: {
        type: String,
    }
});

module.exports = mongoose.model("User", UserSchema);