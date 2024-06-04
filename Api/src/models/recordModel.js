const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    nom: { type: String, default: '---' },
    prenom: { type: String, default: '---' },
    date: { type: Date },
    heure: { type: String},
    pronostics: { type: String, default: '---' },
    arrivee: { type: String, default: '---' },
    taux: { type: String, default: '---' },
    typeCourse: { type: String, default: '---' },
    typePari: { type: String, default: '---' },
    arretJeu: { type: String, default: '---' },
    finCourse: { type: String, default: '---' },
    ch: { type: Number, default: 0 },
    nbg: { type: Number, default: 0 },
    np: { type: String, default: '---' },
});

module.exports = mongoose.model('Record', recordSchema);
