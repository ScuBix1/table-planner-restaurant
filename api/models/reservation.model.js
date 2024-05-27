const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    tableNumber: {type: Number, require: true},
    customerName: {type: String, require: true},
    email: {type: String, require: true},
    phoneNumber: {type: String, require: true},
    startTime: {type: String, require: true},
    endTime: {type: String, require: true},
    price: {type: Number, require: true},
    statusTable: {type: String, enum: ['free', 'reserved'], default: 'free'},
});

module.exports = mongoose.model('Reservation', reservationSchema);