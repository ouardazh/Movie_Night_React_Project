import './Footer.css';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer>
            <div className='containerIconsFooter'>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>

            <div className='lastFooter'>
                <div className='linkFooter'>
                    <Link to="/">Home</Link>
                    <Link to="/watchlist">Watchlist</Link>
                </div>

                <p>&copy; 2026 StreamRif Inc.</p>
            </div>
        </footer>
    )
}
export default Footer;