/* eslint-disable react/prop-types */
import './header.css'

const Header = ({title1,title2,title3}) => {
    return (
        <div>
            <header className="header">
                <h1>
                {title1}
                </h1>
                <h1>
                    <span className ="text-blue-400"> {title2} </span> <span className="text-orange-500 font-semibold">{title3}</span>
                </h1>
            </header>
        </div>
    )
}

export default Header