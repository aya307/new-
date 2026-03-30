require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./connectDB');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Serveur fonctionne ✅' });
});

// app.use('/api/users', require('./routes/userRoutes'));  ← ajoute tes routes ici

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT} 🚀`);
});