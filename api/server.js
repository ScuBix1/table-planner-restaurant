const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const reservationRoute = require('./routes/reservation.route');
const tableRoute = require('./routes/table.route');
const bodyParser = require('body-parser');
const Table = require('./models/table.model');

const app = express();
const port = process.env.PORT || 3000;
const stripe = require('stripe')(process.env.STRIPE_KEY);
const YOUR_DOMAIN = process.env.HOST_BACK;
const DOMAIN_FRONT = process.env.HOST_FRONT

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à la base de données'))
  .catch((err) => console.log('Il y a le problème suivant=>', err));

app.use('/api/table', tableRoute);
app.use('/api/reservation', reservationRoute);
app.post('/api/stripe/charge', async (req, res) => {
  try {
    const { menu, tableNumber } = req.body;
    if (menu === '2') {
      priceId = 'price_1PNFzlBjG7na9ODgVawNkRKT';
    } else if (menu === '4') {
      priceId = 'price_1PMt4ABjG7na9ODgSFgIsKVk';
    } else if (menu === '5') {
      priceId = 'price_1PMtnZBjG7na9ODgOoZXclAg';
    } else if (menu === '15') {
      priceId = 'price_1PMtqlBjG7na9ODgzrqK0b2b';
    } else {
      return res.status(400).send('Invalid menu value');
    }
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success?menu=${menu}&tableNumber=${tableNumber}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN_FRONT}`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    res.status(500).send(`Error creating Stripe session: ${error.message}`);
  }
});
app.get('/success', async (req, res) => {
  const { menu, tableNumber, session_id } = req.query;
  const session = await stripe.checkout.sessions.retrieve(session_id);
  console.log(session);
  if (session.payment_status === 'paid') {
    const table = await Table.findOne({ numberTable: tableNumber });
    if (!table) {
      return res.status(404).json({ message: 'Pas de table trouvé' });
    }
    if (!menu) {
      res.status(400).json({ message: "Aucun menu n'a été selectionné" });
    } else if (menu == '2') {
      table.price = 80;
      table.typeMenu = menu;
    } else if (menu == '4') {
      table.price = 150;
      table.typeMenu = menu;
    } else if (menu == '5') {
      table.price = 200;
      table.typeMenu = menu;
    } else if (menu == '15') {
      table.price = 720;
      table.typeMenu = menu;
    }
    table.statusTable = 'reserved';
    await table.save();
    res.redirect(`${DOMAIN_FRONT}?payment_success=true`);
  }
});
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
