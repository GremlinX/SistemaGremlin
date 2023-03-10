const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PacientSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    NomeDaMae: {
        type: String,
        required: true
    },
    CPF: {
        type: String,
        required: true
    },
    CartaoSUS: {
        type: String,
        required: true
    },
    contato: {
        type: String,
    },
    observacao: {
        type: String,
    },
    cargo: {
        type: String,
    },
    senha: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Pacient", PacientSchema);