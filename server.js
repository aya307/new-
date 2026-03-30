const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/ma-base')
  .then(() => console.log('MongoDB connecté ✅'))
  .catch(err => console.log('Erreur :', err));

app.listen(3000, () => console.log('Serveur sur http://localhost:3000'));