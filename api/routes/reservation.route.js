const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation.model');
const Table = require('../models/table.model');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Fonction de validation du numéro de téléphone
function validatePhoneNumber(phoneNumber) {
  const regex = /^[0-9]{10}$/; // Format pour un numéro de téléphone à 10 chiffres
  return regex.test(phoneNumber);
}

router.get('/', async (req, res) => {
  const reservations = await Reservation.find();
  return res.json(reservations);
});

router.post('/', async (req, res) => {
  try {
    const {
      tableNumber,
      customerName,
      email,
      phoneNumber,
      timeReservation,
      termsAccepted,
    } = req.body;
    let price = 0;
    let statusTable = 'free';
    //verification que les information soit correctement rempli pour la réservation
    if (!customerName || customerName.trim() === '') {
      return res.status(400).json({ message: 'Le champ nom est vide' });
    }
    if (!email || !validateEmail(email)) {
      return res.status(400).json({ message: "L'adresse email est invalide" });
    }
    if (
      !phoneNumber ||
      phoneNumber.trim() === '' ||
      !validatePhoneNumber(phoneNumber)
    ) {
      return res
        .status(400)
        .json({ message: 'Le numéro de téléphone est invalide' });
    }
    if (termsAccepted === false) {
      return res
        .status(400)
        .json({
          message: 'Il faut accepter les termes pour procéder au paiement.',
        });
    }
    //on cherche la table avec le bon id pour l'attribuer a la reservation
    const table = await Table.findOne({ numberTable: tableNumber });
    if (!table) {
      return res.status(404).json({ message: 'Pas de table trouvé' });
    }

    const newReservation = new Reservation({
      _table: table._id,
      customerName,
      email,
      phoneNumber,
      timeReservation,
      termsAccepted,
    });
    

    await newReservation.save();
    return res.json(newReservation);
  } catch (error) {
    return res.status(500).json(error);
  }
});
router.put('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!reservation)
      return res.status(404).json({ message: 'Aucune réservation trouvé' });
    return res.json(reservation);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
module.exports = router;
