/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './navBar.css';




const ListItems = ({ link, name }) => {
    return (
            <li className="item">
                <Link to={link}>{name}</Link>
            </li>
    )
}

export default ListItems