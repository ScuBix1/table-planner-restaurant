const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const reservationRoute = require('./routes/reservation.route');
const tableRoute = require('./routes/table.route');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const stripe = require('stripe')(process.env.STRIPE_KEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Max-Age', '1800');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à la base de données'))
  .catch((err) => console.log('Il y a le problème suivant=>', err));

app.use('/api/table', tableRoute);
app.use('/api/reservation', reservationRoute);
app.post('/api/stripe/charge', cors(), async (req,res)=>{
  let {amount, id, email, phone} = req.body
  console.log("amound & id: ",amount,id )
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'EUR',
      description: 'Réservation Royaume de Saba',
      payment_method: id,
      confirm: true,
      email: email,
      phone: phone,
      payment_method_types: ['card'],
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never' // ou utilisez 'return_url' selon votre choix
      }
    })
    res.json({
      message: "paiement réussi !",
      success: true,
    })
  } catch (error) {
      console.log(error)
      res.json({
        message: 'Le paiement a échoué !',
        success: false,
        error: error,
      })
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
