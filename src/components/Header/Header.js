import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'



function Header() {
    return (

        <header className="header">
            <a href="/">
                <FontAwesomeIcon icon={faHome} className="homeIcon"/>
            </a>
            <nav>
                <ul className="menu">
                    <li><a href="/sobre">
                    <FontAwesomeIcon icon={faQuestion} className="homeIcon"/>
                        </a></li>
                    <li><a href="/produtos">
                    <FontAwesomeIcon icon={faBagShopping} className="homeIcon"/>
                    </a></li>
                    <li><a href="/carrinho">
                    <FontAwesomeIcon icon={faCartPlus} className="homeIcon"/>
                    </a></li>
                </ul>
            </nav>
        </header>
        
// https://react-icons.github.io/react-icons
    )
}

export default Header