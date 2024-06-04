import { Link } from 'react-router-dom';
import './ButtonNav.css';

const ButtonNav = () => {
    return (
        <div className="buttons">
            <div className="enreg detail">
                <Link to="/addDetail">Enregistrement Detaillé</Link>
            </div>

            <div className="list">
                <Link to="/listRecords">Consulter les Enregistrements</Link>
            </div>

            <div className="enreg simple">
                <Link to="/addSimple">Enregistrement Simple</Link>
            </div>
        </div>
    )
}

export default ButtonNav
