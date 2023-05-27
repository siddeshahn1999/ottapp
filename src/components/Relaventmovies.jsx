import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";


const Relaventmovies = ({genre}) => {
    let [movies, setMovies] = useState(null);

    useEffect(() => {
            fetch("http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                    setMovies(data);
                   
                })
    }, [])
    return ( 
        <div className="relevent-movies">
        
        {
            movies && <Movieslist movies={movies.filter((m)=>{return m.genre.includes(genre)})}
             title="Relevent Movies"/>
        }
       
        </div>
     );
}
 
export default Relaventmovies;