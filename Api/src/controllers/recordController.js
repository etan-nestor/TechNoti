const Record = require('../models/recordModel');

const createSimpleRecord = async (req, res) => {
    try {
        const { nom, prenom, date, heure, pronostics, arrivee, taux } = req.body;
        const record = new Record({
            nom,
            prenom,
            date,
            heure,
            pronostics,
            arrivee,
            taux,
            typeCourse: '---',
            typePari: '---',
            arretJeu: '---',
            finCourse: '---',
            ch: 0,
            np: '---',
            nbg: 0,
        });
        await record.save();
        res.status(201).json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createDetailedRecord = async (req, res) => {
    try {
        const record = new Record(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getRecords = async (req, res) => {
    try {
        const records = await Record.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecord = await Record.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getRecordById = async (req, res) => {
    try {
        console.log('Fetching record with ID:', req.params.id);
        const { id } = req.params;
        const record = await Record.findById(id);
        if (!record) {
            console.log('Record not found');
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json(record);
    } catch (error) {
        console.error('Error fetching record:', error);
        res.status(400).json({ message: error.message });
    }
};



const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        await Record.findByIdAndDelete(id);
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const getRecentRecords = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const records = await Record.find({ date: { $lte: today } })
            .sort({ date: -1 }) 
            .limit(5);

        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des enregistrements récents', error });
    }
};

const getProgramRecords = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const records = await Record.find({
            date: {
                $gte: yesterday,
                $lte: tomorrow,
            }
        }).sort({ date: 1 }); // Trier par date croissante

        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des enregistrements du programme', error });
    }
};

module.exports = {
    createSimpleRecord,
    createDetailedRecord,
    getRecords,
    getRecentRecords,
    getProgramRecords,
    updateRecord,
    deleteRecord,
    getRecordById,
};
