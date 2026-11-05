import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <div className='containerHeader'>
                <i class="fa-solid fa-forward-step"></i>
                <p className='logo'>STREAM<span>RIF</span></p>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
                {/* <a href="">Home</a>
                <a href="">Watchlist</a> */}
            </nav>

            <div className='containerIcons'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-bell"></i>
            </div>
        </header>
    )
}
export default Header;