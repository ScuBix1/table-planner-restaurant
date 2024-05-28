const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    _table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'table',
    },
    customerName: {type: String, require: true},
    email: {type: String, require: true},
    phoneNumber: {type: String, require: true},
    numberKids: {type: Number, default: 0, require: true},
    startTime: {type: String, require: true},
    endTime: {type: String, require: true},
});

module.exports = mongoose.model('Reservation', reservationSchema);