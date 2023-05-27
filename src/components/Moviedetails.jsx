import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Relaventmovies from "./Relaventmovies";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Moviedetails = (movies) => {
    let { id } = useParams();
    let navigate = useNavigate();
    let [movie, setMovie] = useState(null);
    let [error, setError] = useState(null);
    let [pending, setPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4000/movies/" + id)
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setMovie(data);
                    setPending(false);
                })
                .catch((err) => {
                    setError("404 network issue !!!! please try again later")
                    setPending(false);
                })
        }, 3000)
    }, [id])

    let deleteMovie = () => {
        fetch("http://localhost:4000/movies/" + id, { method: "DELETE" })
            .then(() => { navigate("/") })
    }

    return (
        <div className="moviedetails">
            {pending == true && <div className="loading"></div>}
            {error && <h1>{error}</h1>}
            {movie && <div className="movie-details">
            <h1>Watch complete movie</h1>
                    <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <img src={movie.poster} alt="Poster" width="300px" height="300px" />
                    <h1 id="moviename">{movie.moviename}</h1>
                    <h1>Actor :{movie.hero}</h1>
                    <h1>Actress :{movie.heroine}</h1>
                    <p>Director :{movie.director}</p>
                    <p>Languages :{movie.languages.join(" , ")}</p>
                    <p>Genre :{movie.genre}</p>
                    <p>Release Date :{movie.release}</p>
                    <p>Rating :{movie.rating}</p>
                    <h3>Story Line :</h3>
                    <p>{movie.synopsis}</p>
               
                
                    <button onClick={deleteMovie}>DELETE</button><br />
     
                <Link to={`/edit/${movie.id}`}><button>Update</button></Link>        
                </div>}
                
            {movie && <Relaventmovies genre={movie.genre} />}
            
        </div>
    );
}

export default Moviedetails;