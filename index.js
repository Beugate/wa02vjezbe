const express = require('express');
const nekretnineRouter = require('./routes/nekretnine/nekretnine');
const ponudeRouter = require('./routes/ponude/ponude');
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use('/nekretnine', nekretnineRouter);
app.use('/ponude', ponudeRouter);

const PORT = 3000;

app.get('/', (req, res) => {
    res.json('Hello, world!');
});

app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
});
