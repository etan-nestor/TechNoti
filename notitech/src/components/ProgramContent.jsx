/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import './programContent.css';
import { toast, Toaster } from 'react-hot-toast';

const ProgramContent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProgramRecords = async () => {
        try {
            const response = await fetch('https://tech-noti.vercel.app/api/records/program');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Erreur lors de la récupération des enregistrements du programme');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProgramRecords();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-full">
                <p className="text-2xl">Loading...</p>
            </div>
        );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const renderTableData = (filteredData) => (
        <table className="programTable">
            
            <tbody>
                {filteredData.map(item => (
                    <tr key={item._id}>
                        <td className="pari">{item.typePari || '---'}</td>
                        <td className="ch">{item.ch || '---'} CH</td>
                        <td className="np">{item.np || '---'}</td>
                        <td className="tcrs">{item.typeCourse || '---'}</td>
                        <td className="ajeu">{item.arretJeu || '---'}</td>
                        <td className="fcrs">{item.finCourse || '---'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="program">
            <h3 className="day text-2xl font-bold uppercase text-blue">Hier</h3>
            {renderTableData(data.filter(item => new Date(item.date).setHours(0, 0, 0, 0) === yesterday.getTime()))}
            <h3 className="day jour text-2xl font-bold uppercase text-blue">Aujourd'hui</h3>
            {renderTableData(data.filter(item => new Date(item.date).setHours(0, 0, 0, 0) === today.getTime()))}
            <h3 className="day text-2xl font-bold uppercase text-blue">Demain</h3>
            {renderTableData(data.filter(item => new Date(item.date).setHours(0, 0, 0, 0) === tomorrow.getTime()))}
            <Toaster />
        </div>
    );
};

export default ProgramContent;
