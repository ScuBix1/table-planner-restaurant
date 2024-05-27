const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation.model');

router.get('/', async (req, res) => {
    const reservations = await Reservation.find();
    res.json(reservations);
});

router.post('/', async (req, res) => {
    try {
        const { tableNumber, customerName, email, phoneNumber, startTime, endTime, price, statusTable } = req.body;

        const newReservation = new Reservation({
            tableNumber,
            customerName,
            email,
            phoneNumber,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            price,
            statusTable
        });

        await newReservation.save();
        res.json(newReservation);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
