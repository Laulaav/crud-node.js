const mongoose = require('mongoose');

const cadastroSchema = mongoose.Schema(
{
    email: {
        type: String,
        required: [true, "Por favor coloque seu email!"]
    },
    numero: {
        type: Number,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    nomeCompleto: {
        type: String,
        required: [true, "Escreva seu nome completo!"]
    }
},
{
    timestamps: true
});

const Cadastro = mongoose.model('Cadastro', cadastroSchema);

module.exports = Cadastro;