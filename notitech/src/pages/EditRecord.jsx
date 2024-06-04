import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import './editRecord.css';

const EditRecord = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    date: '',
    heure: '',
    typeCourse: '',
    typePari: '',
    ch: '',
    np: '',
    arretJeu: '',
    finCourse: '',
    pronostics: '',
    arrivee: '',
    nbg: '',
    taux: ''
  });

  // Fonction pour formater la date au format YYYY-MM-DD
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/records/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'enregistrement');
        }
        const record = await response.json();
        // Formater la date avant de mettre à jour l'état
        record.date = formatDate(record.date);
        setFormData(record);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchRecord();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://tech-noti.vercel.app/api/records/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success('Enregistrement mis à jour avec succès');
        navigate('/listRecords');
      } else {
        const errorData = await response.json();
        toast.error(`Erreur : ${errorData.message}`);
      }
    } catch (error) {
      toast.error('Erreur de connexion au serveur');
    }
  };

  return (
    <>
      <NavBar />
      <Header title1={"Noticom Holding"} title2={" Mettre à jour "} title3={"cet enregistrer"} />
      <div className="EditForm">
        <div className="EditFormContainer">
          <form onSubmit={handleSubmit} className="EditGridForm">
            <div className="EditFormGroup">
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Nom"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Prénom"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
                required
              />
            </div>
            <div className="EditFormGroup">
              <select
                name="typeCourse"
                value={formData.typeCourse}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Type de Course</option>
                <option value="Attelé">Attelé</option>
                <option value="Monté">Monté</option>
                <option value="Haies">Haies</option>
                <option value="Plat">Plat</option>
                <option value="Handicap">Handicap</option>
                <option value="Steeple">Steeple</option>
                <option value="Cross">Cross-country</option>
              </select>
            </div>
            <div className="EditFormGroup">
              <select
                name="typePari"
                value={formData.typePari}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Type de Pari</option>
                <option value="Quinté">Quinté</option>
                <option value="Quarté">Quarté</option>
                <option value="Tiercé">Tiercé</option>
              </select>
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="ch"
                value={formData.ch}
                onChange={handleChange}
                placeholder="CH"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="np"
                value={formData.np}
                onChange={handleChange}
                placeholder="NP"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="time"
                name="arretJeu"
                value={formData.arretJeu}
                onChange={handleChange}
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="time"
                name="finCourse"
                value={formData.finCourse}
                onChange={handleChange}
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="pronostics"
                value={formData.pronostics}
                onChange={handleChange}
                placeholder="Pronostics"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="arrivee"
                value={formData.arrivee}
                onChange={handleChange}
                placeholder="Arrivée"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="nbg"
                value={formData.nbg}
                onChange={handleChange}
                placeholder="NG"
                required
              />
            </div>
            <div className="EditFormGroup">
              <input
                type="text"
                name="taux"
                value={formData.taux}
                onChange={handleChange}
                placeholder="Taux de Réussite"
                required
              />
            </div>
              <div className="EditBtns">
                <button className="EditBtnSubmit" type="submit">Mettre à jour</button>
              </div>
              <div className="EditBtns">
                <Link to='/listRecords' className="EditCancel" type="s">Annuler</Link>
              </div>
          </form>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default EditRecord;
