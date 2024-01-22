const express = require('express');
const scanner = require('node-wifi-scanner');
const app = express();
const port = 3000; // Vous pouvez choisir un autre port si celui-ci est déjà utilisé

app.get('/api/wifi', (req, res) => {
    scanner.scan((err, networks) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erreur lors du scan WiFi.' });
            return;
        }
        res.json(networks);
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
