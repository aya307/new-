const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


const MONGO_URI = 'mongodb+srv://znatniaya1234_db_user:<GunF029axfPimc25>@cluster.mrdahp3.mongodb.net/?appName=Cluster'
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connecté ✅'))
  .catch(err => console.log('Erreur :', err));

app.listen(3000, () => console.log('Serveur sur http://localhost:3000'));