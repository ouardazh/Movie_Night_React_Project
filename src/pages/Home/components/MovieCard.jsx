import './MovieCard.css';

function MovieCard({id, title, image, genre, description, addWatchlist}){
    const movie={
        id,
        title,
        image,
        genre,
        description
    }

  
    return(
        <div className='cartMovies'>
            <img src={image} alt="" />
            <h3> {title} </h3>
            <p className='genreMovie'> {genre} </p>
            <p className='descMovie'> {description} </p>
            <button onClick={()=>addWatchlist(movie)} className='addBtn' >Add to watchlist</button>
        </div>
    )
}
export default MovieCard;