const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const reservationRoute = require('./routes/reservation.route');
const tableRoute = require('./routes/table.route');

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow", '*')
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Max-Age", "1800")
  res.setHeader("Access-Control-Allow-Headers","X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization")
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTIONS")
  next()
})
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
