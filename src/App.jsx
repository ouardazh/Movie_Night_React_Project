import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Watchlist from './pages/Watchlist/Watchlist';
import { useState } from 'react';

function App() {
  
  const [watchlist, setWatchlist] = useState([]);
  function addWatchlist(movie){
    setWatchlist([...watchlist, movie])
    console.log('Movie adddddeeeeddd');
    
  }

  function removeMovie(movieid){
    setWatchlist(watchlist => 
      watchlist.filter(movie=> movie.id !== movieid)
    )
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element ={<Home addWatchlist={addWatchlist} />} />
        <Route path='/watchlist' element= {<Watchlist watchlist={watchlist}  removeMovie={removeMovie}/>} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
