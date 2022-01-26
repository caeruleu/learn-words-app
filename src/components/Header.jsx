import '../assets/styles/header.scss';
import '../assets/styles/consts.scss';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="Header">
            <nav className='headerNav'>
                <ol>
                    <Link to="/"><FontAwesomeIcon className='logo' icon={faScroll} /></Link>
                </ol>
                <ol>
                    <Link to="/"><p className='test'>Главная</p></Link>
                </ol>
                <ol>
                    <Link to="/cardsgame"><p className='test'>Игра</p></Link>
                </ol>
            </nav>
        </div>
        );
}

export default Header;
