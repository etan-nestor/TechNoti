import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './detailRecord.css';

const DetailRecord = () => {
    // Obtenir la date et l'heure actuelles
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format yyyy-mm-dd
    const formattedTime = currentDate.toTimeString().substring(0, 5); // Format HH:mm

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        date: formattedDate,
        heure: formattedTime,
        typeCourse: '',
        typePari: '',
        ch: '',
        np: '',
        arretJeu: '11:45',
        finCourse: '12:00',
        pronostics: '',
        arrivee: '',
        nbg: '',
        taux: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/records/detailed', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                toast.success('Enregistrement détaillé réussi!');
                setFormData({
                    nom: '',
                    prenom: '',
                    date: formattedDate,
                    heure: formattedTime,
                    typeCourse: '',
                    typePari: '',
                    ch: '',
                    np: '',
                    arretJeu: '11:45',
                    finCourse: '12:00',
                    pronostics: '',
                    arrivee: '',
                    nbg: '',
                    taux: ''
                });
            } else {
                toast.error('Erreur lors de l\'enregistrement détaillé');
            }
        } catch (error) {
            toast.error('Erreur de connexion au serveur');
        }
    };

    return (
        <div className="DetailForm">
            <div className="DetailFormContainer">
                <form onSubmit={handleSubmit} className="DetailGridForm">
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="time"
                            name="heure"
                            value={formData.heure}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <select
                            name="typeCourse"
                            value={formData.typeCourse}
                            onChange={handleChange}
                        >
                            <option value="" disabled selected>Type de Course</option>
                            <option value="Attelé">Attelé</option>
                            <option value="Monté">Monté</option>
                            <option value="Haies">Haies</option>
                            <option value="Plat">Plat</option>
                            <option value="Handicap">Handicap</option>
                            <option value="Steeple">Steeple-Chasse</option>
                            <option value="Cross">Cross-country</option>
                        </select>
                    </div>
                    <div className="DetailFormGroup">
                        <select
                            name="typePari"
                            value={formData.typePari}
                            onChange={handleChange}
                        >
                            <option value="" disabled selected>Type de Pari</option>
                            <option value="Quinté">Quinté</option>
                            <option value="Quarté">Quarté</option>
                            <option value="Tiercé">Tiercé</option>
                        </select>
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="ch"
                            value={formData.ch}
                            onChange={handleChange}
                            placeholder="CH"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="np"
                            value={formData.np}
                            onChange={handleChange}
                            placeholder="NP"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="time"
                            name="arretJeu"
                            value={formData.arretJeu}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="time"
                            name="finCourse"
                            value={formData.finCourse}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="pronostics"
                            value={formData.pronostics}
                            onChange={handleChange}
                            placeholder="Pronostique"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="arrivee"
                            value={formData.arrivee}
                            onChange={handleChange}
                            placeholder="Arrivée"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="nbg"
                            value={formData.nbg}
                            onChange={handleChange}
                            placeholder="NG"
                        />
                    </div>
                    <div className="DetailFormGroup">
                        <input
                            type="text"
                            name="taux"
                            value={formData.taux}
                            onChange={handleChange}
                            placeholder="Taux de Réussite"
                        />
                    </div>
                    <button className="DetailBtnSubmit" type="submit">Envoyer</button>
                </form>
                <Toaster />
            </div>
        </div>
    );
};

export default DetailRecord;
