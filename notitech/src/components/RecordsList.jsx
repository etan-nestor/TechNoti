import './recordsList.css';
import { useState, useEffect } from 'react';
import { Trash2, FilePenLine } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const RecordsList = () => {

    const [data, setData] = useState([]);

    const fetchRecords = async () => {
        try {
            const response = await fetch("http://tech-noti.vercel.app/api/records");
            const records = await response.json();
            setData(records);
        } catch (error) {
            console.error("Une erreur s'est produite", error);
            toast.error("Erreur lors de la récupération des enregistrements");
        }
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/records/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                toast.success("Enregistrement supprimé avec succès");
                fetchRecords();
            } else {
                toast.error("Erreur lors de la suppression de l'enregistrement");
            }
        } catch (error) {
            console.error("Une erreur s'est produite", error);
            toast.error("Erreur de connexion au serveur");
        }
    };

    return (
        <>

            {/* <div className="search-container">
                <div className="search">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <Search className="search-icon" />
                </div>
            </div> */}

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Course</th>
                            <th>Paris</th>
                            <th>CH</th>
                            <th>NP</th>
                            <th>A. Jeu</th>
                            <th>F. Course</th>
                            <th>Pronostics</th>
                            <th>Arrivée</th>
                            <th>N. Gagnant</th>
                            <th>Taux</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((record) => (
                            <tr className="row-type-1" key={record._id}>
                                <td>{record.nom}</td>
                                <td>{record.prenom}</td>
                                <td>{new Date(record.date).toLocaleDateString()}</td>
                                <td>{record.heure}</td>
                                <td>{record.typeCourse}</td>
                                <td>{record.typePari}</td>
                                <td>{record.ch}</td>
                                <td>{record.np}</td>
                                <td>{record.arretJeu}</td>
                                <td>{record.finCourse}</td>
                                <td>{record.pronostics}</td>
                                <td>{record.arrivee}</td>
                                <td>{record.nbg}</td>
                                <td>{record.taux}%</td>
                                <td className="flex gap-2 items-center">
                                    <Trash2 color="red" onClick={() => handleDelete(record._id)} />
                                    <Link to={`/editRecord/${record._id}`}>
                                        <FilePenLine color="green" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Toaster />
            </div>
        </>
    );
};

export default RecordsList;
