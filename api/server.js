const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const reservationRoute = require('./routes/reservation.route');
const tableRoute = require('./routes/table.route');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à la base de données'))
  .catch((err) => console.log('Il y a le problème suivant=>', err));
  
app.use('/api/table', tableRoute);
app.use('/api/reservation', reservationRoute);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
