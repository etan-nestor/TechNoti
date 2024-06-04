import { useState, useEffect } from 'react';
import './resultContent.css';
import { toast, Toaster } from 'react-hot-toast';

const ResultContent = () => {
    const [results, setResults] = useState([]);

    const fetchRecentRecords = async () => {
        try {
            const response = await fetch('https://tech-noti.vercel.app/api/records/recent');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Erreur lors de la récupération des enregistrements récents');
        }
    };

    useEffect(() => {
        fetchRecentRecords();
    }, []);

    return (
        <div className="contentRes">
            <table className="resultsTable">
                <tbody>
                    {results.map(result => (
                        <tr key={result._id}>
                            <td className="date">{new Date(result.date).toLocaleDateString()}</td>
                            <td className="paris">{result.typePari || '---'}</td>
                            <td className="arriv">{result.arrivee || '---'}</td>
                            <td className="nb">{result.nbg || '0'}</td>
                            <td className="taux">{result.taux || '---'}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Toaster />
        </div>
    );
};

export default ResultContent;
