const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    _table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'table',
    },
    customerName: {type: String, require: true},
    email: {type: String, require: true},
    phoneNumber: {type: String, require: true},
    timeReservation: {type: String, require: true},
    termsAccepted: {type: Boolean, require: true},
});

module.exports = mongoose.model('Reservation', reservationSchema);