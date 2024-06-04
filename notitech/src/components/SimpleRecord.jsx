import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './simpleRecord.css';

const SimpleRecord = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substring(0, 10);
    const formattedTime = currentDate.toTimeString().substring(0, 5);

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        date: formattedDate,
        heure: formattedTime,
        pronostics: '',
        arrivee: '',
        taux: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        for (const key in formData) {
            if (!formData[key]) {
                toast.error('Tous les champs sont requis');
                return;
            }
        }

        try {
            const response = await fetch('http://localhost:5000/api/records/simple', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                toast.success('Enregistrement réussi!');
                setFormData({
                    nom: '',
                    prenom: '',
                    date: formattedDate,
                    heure: formattedTime,
                    pronostics: '',
                    arrivee: '',
                    taux: ''
                });
            } else {
                toast.error('Erreur lors de l\'enregistrement');
            }
        } catch (error) {
            toast.error('Erreur de connexion au serveur');
        }
    };

    return (
        <div className="SimpleForm">
            <div className="SimpleFormContainer">
                <form onSubmit={handleSubmit}>
                    <div className="SimpleFormGroup">
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom"
                            required
                        />
                    </div>
                    <div className="SimpleFormGroup">
                        <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom"
                            required
                        />
                    </div>
                    <div className="SimpleFormGroup">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="SimpleFormGroup">
                        <input
                            type="time"
                            name="heure"
                            value={formData.heure}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="SimpleFormGroup">
                        <input
                            type="text"
                            name="pronostics"
                            value={formData.pronostics}
                            onChange={handleChange}
                            placeholder="Pronostique"
                            required
                        />
                    </div>
                    <div className="SimpleFormGroup">
                        <input
                            type="text"
                            name="arrivee"
                            value={formData.arrivee}
                            onChange={handleChange}
                            placeholder="Arrivée"
                            required
                        />
                    </div>
                    <div className="SimpleFormGroup">
                        <input
                            type="text"
                            name="taux"
                            value={formData.taux}
                            onChange={handleChange}
                            placeholder="Taux de Réussite"
                            required
                        />
                    </div>
                    <div className="SimpleBtnContainer">
                        <button className="SimpleBtnSubmit" type="submit">Envoyer</button>
                    </div>
                </form>
                <Toaster />
            </div>
        </div>
    );
};

export default SimpleRecord;
