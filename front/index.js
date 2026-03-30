const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour lire le JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});