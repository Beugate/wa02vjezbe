const express = require('express');
const router = express.Router();

let ponude = [];

router.post('/', (req, res) => {
    console.log(req.body);
    const { id, naziv, opis, cijena, lokacija, broj_Soba, povrsina } = req.body;

    if (!id || !naziv || !cijena || !lokacija || broj_Soba < 0 || povrsina < 0) {
        return res.status(400).send('neispravni podaci');
    }
    const novaPonuda = { id, naziv, opis, cijena, lokacija, broj_Soba, povrsina };

    ponude.push(novaPonuda);

    res.status(201).json(novaPonuda);
});

module.exports = router;
