const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    numberTable: {type: Number, require: true},
    price: {type: Number, require: true},
    statusTable: {type: String, enum: ['free', 'reserved'], default: 'free'},
    typeMenu: {type: String}
})

module.exports = mongoose.model('Table', tableSchema)