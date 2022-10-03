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

PacientSchema.statics.isThisCPFInUse = async function(CPF){
    // if(!CPF) throw new Error('CPF inválido');
    try {
        const user = await this.findOne({CPF});
        if(user) { return false; }
        else { return true; }
    } catch (error) {
        console.log("Erro na função 'isThisCPFInUse' method", error);
        return false;
    }
}


module.exports = mongoose.model("Pacient", PacientSchema);