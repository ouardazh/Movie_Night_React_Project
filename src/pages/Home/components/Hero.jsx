import { Link } from 'react-router-dom';
import './Hero.css';

function Hero(){
    return(
        <section className='heroSection'>
            <div className='containerHero'>
                <p>Featured Original Series</p>
                <h1>THE VANGUARD</h1>
                <p className='paragraphHero'>Action | Thriller | Dram <span>★</span> 4.8</p>
                <p>A global crisis threatens. One team must navigate <br />
                   darkness. Stream now.</p>

                   <div>
                    <button className='playBtn'>▶ Play Now</button>
                    <Link to="/watchlist"><button className='moreBtn'>✚ Watchlist</button></Link>
                    
                   </div>
            </div>
        </section>
    )
}
export default Hero;