import MovieCard from './components/MovieCard';
import Hero from './components/Hero';
import './Home.css';
import { useState } from 'react';
function Home({addWatchlist}){
    const movies = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    genre: "Sci-Fi",
    description: "A thief enters people's dreams to steal secrets."
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    genre: "Adventure",
    description: "A team travels through space to find a new home."
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre: "Action",
    description: "Batman faces his greatest enemy, the Joker."
  },
  {
    id: 4,
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    genre: "Fantasy",
    description: "A human explores the beautiful world of Pandora."
  },
  {
    id: 5,
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    genre: "Romance",
    description: "A love story aboard the famous Titanic ship."
  },
  {
    id: 6,
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genre: "Drama",
    description: "The story of a man who becomes the Joker."
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genre: "Action",
    description: "The Avengers unite to save the universe."
  },
  {
    id: 8,
    title: "Harry Potter",
    image: "https://image.tmdb.org/t/p/w500/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
    genre: "Fantasy",
    description: "A young wizard discovers his magical destiny."
  }
];

   
   // Filter Movie-------------------
   const [genre, setGenre] = useState("All")
   function FilterMovie(){
    return movies.filter((item)=>{
      if (genre === "All") {
        return true;
      }
      else{
        return item.genre === genre;
      }
    })
   }
   // Search Movie------------------
   const [search, setSearch] = useState("");
   function SearchMovie() {
    return FilterMovie().filter((item)=>{
      return item.title.toLocaleLowerCase().includes(search)
     
    })
   }
  
    return(
      <main>
        <Hero />
        <section className='searchSection'>
          
            <input type="text" className='searchInput' placeholder='Search movies by title...'
            onChange={(e)=>setSearch(e.target.value)}  value={search}/>
            <div className='containerSelect'>
              <label htmlFor="">Genre:</label>
              <select name="" id="" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="All">All</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
         
        </section>

        <section className='moviesSection'>
            {SearchMovie().map((item)=>( 
            <MovieCard
            id={item.id}
            image={item.image}
            title={item.title}
            genre={item.genre}
            description={item.description}
            addWatchlist={addWatchlist}
            />
            
             ))}
        </section>
      </main>
        
    )
}
export default Home;
