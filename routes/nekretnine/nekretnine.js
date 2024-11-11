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
    const id_nekretnina = req.params.id; 
    const nekretnina = nekretnine.find(nekretnine => nekretnine.id == id_nekretnina);
    if (nekretnina) {
    res.json(nekretnina);
    } else {
    res.json({ message: 'nekretnina s traženim ID-em ne postoji.' });
    }
});

//dodaj novu nekretninu

router.post('/', (req, res) => {

    const { id, naziv, opis, cijena, lokacija, broj_Soba, povrsina } = req.body;

    if (!id || !naziv || !cijena || !lokacija || broj_Soba < 0 || povrsina < 0) {
        return res.status(400).send('neispravni podaci');
    }
    const novaNekretnina = { id, naziv, opis, cijena, lokacija, broj_Soba, povrsina };

    nekretnine.push(novaNekretnina);

    res.status(201).json(novaNekretnina);
});




//ažuriraj nekretninu potpuno
router.put('/:id', (req, res) => {
    const id_nekretnina = req.params.id;
    const nova_nekretnina = req.body;
    nova_nekretnina.id = id_nekretnina; 
    const index = nekretnine.findIndex(nekretnine => nekretnine.id == id_nekretnina);
    console.log("index pozicija: ",index)
    if (index !== -1) {
        nekretnine[index] = nova_nekretnina;
        res.json(nekretnine[index]);
    } else {
        res.json({ message: 'nekretnina s traženim ID-em ne postoji.' });
    }
});


//ažuriraj nekretninu djelomično

router.patch('/:id', (req, res) => {
    const id_nekretnina = req.params.id;
    const nova_nekretnina = req.body;
    const index = nekretnine.findIndex(nekretnine => nekretnine.id == id_nekretnina);
    console.log("index pozicija: ",index)
    if (index !== -1) {
        for (const key in nova_nekretnina){
            nekretnine[index] [key] = nova_nekretnina[key];
        }
        res.json(nekretnine[index]);
    } else {
        res.json({ message: 'nekretnina s traženim ID-em ne postoji.' });
    }
});

//obriši nekretninu
router.delete('/:id', (req, res) => {
    const id_nekretnina = req.params.id;
    const index = nekretnine.findIndex(nekretnine => nekretnine.id == id_nekretnina);
    if (index !== -1) {
    nekretnine.splice(index, 1);
    res.json({ message: 'nekretnina uspješno obrisana.' });
    } else {
    res.json({ message: 'nekretnina s traženim ID-em ne postoji.' });
    }
    });


module.exports = router;