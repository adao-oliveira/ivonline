const mongoose = require('mongoose')


const agendaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        trim: true,
        required: true
    },
    tipoAgenda:{
        type: String,
        trim: true,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Agenda", agendaSchema)