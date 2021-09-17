const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    titulo:{
        type: String,
        trim: true,
        required: true
    },
    tipoEvento:{
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
    data:{
        type: Date,
        required: false
    },
    hora:{
        type: Date,
        required: false
    },
    checked:{
        type: Boolean,
        default: false
    },
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)