const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sobreNome: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    whatsapp: {
        type: Number,
        required: true,
        trim: true,
    },
    modulo: {
        type: String,
        required: true,
        trim: true
    },
    grupoEquipe: {
        type: String,
        required: true,
        trim: true
    },
    perfil: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)