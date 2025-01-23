import style from './Comedy.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Comedy() {
  const [movies, setMovies] = useState([]);
  async function Movies(){
   let w= await axios.get('https://www.omdbapi.com/?apikey=df3dd93f&s=comedy');
   console.log('Movies:', w.data.Search);
   setMovies(w.data.Search);
  }
  useEffect(()=>{
    Movies();
  },[])
  return <>
   <div className="mt-5 p-5 bg-dark text-center">
           <h1 className={`text-white mb-4  ${style.mm} d-flex justify-content-center align-items-center m-auto p-1  w-25 border rounded-5`}>Comedy Movies</h1>
           <div className="container p-3">
               <fieldset className={`border border-white rounded-5 p-5 ${style.mm}`}>
                   <div className="row">
                   {movies.map((movie, index) => (
                  <div className="col-md-4 mb-5 p-3" key={index}>
                  
                      <img className='w-75 h-75 border rounded-5' src={movie.Poster} alt={movie.Title} />
                      <h6 className='text-white mt-2'>Title: {movie.Title}</h6>
                      <h6 className='text-white mt-2'>Start Time: {Math.floor(Math.random() * 12) + 1}:{Math.floor(Math.random() * 60)}</h6>
                      <h6 className='text-white mt-2'>Avalible Seats Number: {Math.floor(Math.random() * 60)}</h6>
                      <button className="btn btn-success text-white mt-2 w-50">
                      Book
                      </button>
                      <div className='border border-1 mt-4'></div>
                  </div>
                  
                  ))}
                
                   </div>
                 
               </fieldset>
           </div>
               
       </div>
  </>
  
}
