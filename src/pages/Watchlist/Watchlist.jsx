import './Watchlist.css';

function Watchlist({watchlist= [],removeMovie}){
    return(
        <section className='watchlistSection' >
            <h1 className='titleWatchlist'>My Watchlist</h1>
            <p className='textWatchlist'>Saved movies to watch later. Manage your collection below.</p>
            <div className='moviesSection'>
                {watchlist.map(movie=>(
                <div key={movie.id} className='cartMovies'>
                    <img src={movie.image} alt="" />
                    <h3> {movie.title} </h3>
                    <p className='genreMovie'> {movie.genre} </p>

                    <button className='removeBtn' onClick={()=>removeMovie(movie.id)}>Remove Movie</button>
                </div>
            ))}
            </div>
            
        </section>
    )
}
export default Watchlist;