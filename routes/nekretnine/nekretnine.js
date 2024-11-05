const express = require('express');
const router = express.Router();


const nekretnine = [
    { id: 1, naziv: 'A', opis:'opis1', cijena: 10, lokacija:'busolerska 1', broj_soba: 2, povrsina: 100 },
    { id: 2, naziv: 'B', opis:'opis2', cijena: 20, lokacija:'busolerska 2', broj_soba: 3, povrsina: 110 },
    { id: 3, naziv: 'C', opis:'opis3', cijena: 30, lokacija:'busolerska 3', broj_soba: 4, povrsina: 120 },
    { id: 4, naziv: 'D', opis:'opis4', cijena: 40, lokacija:'busolerska 4', broj_soba: 5, povrsina: 130 },
    { id: 5, naziv: 'E', opis:'opis5', cijena: 50, lokacija:'busolerska 5', broj_soba: 6, povrsina: 140 },
    ];



//dohvati sve nekretnine

router.get('/', (req, res) => {
    res.json(nekretnine);
    });

//dohvati nekretninu po ID-u

router.get('/:id', (req, res) => {
    const id_nekretnine = req.params.id; // dohvaćamo id parametar iz URL-a
    const nekretnina = nekretnine.find(nekretnine => nekretnine.id == id_nekretnine);
    if (nekretnina) {
    // ako je pronađeno podudaranje, vratimo nekretnine objekt
    res.json(nekretnina);
    } else {
    // ako je rezultat undefined, vratimo poruku da nekretnine ne postoji
    res.json({ message: 'nekretnina s traženim ID-em ne postoji.' });
    }
});

//dodaj novu nekretninu

//ažuriraj nekretninu potpuno

//ažuriraj nekretninu djelomično

//obriši nekretninu

//pošalji novu ponudu


module.exports = router;