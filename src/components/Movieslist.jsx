import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Movieslist = ({ movies, title }) => {

    // let handleAddtofav = (movie)=>{
    //     let fav = JSON.parse(localStorage.getItem("fav"));
    //     fav.push(movie);
    //     fav = JSON.stringify(fav);
    //     localStorage.setItem("fav" , fav);
    //     alert("movie added to favorites list")
    //   }

    let [favId ,setFavId]=useState([]);
    let[alterd ,setAlterd]=useState(0);
    useEffect(()=>{
      let fav=  JSON.parse(localStorage.getItem("fav"))
     setFavId( fav.map((m)=>{return m.id}))
     
    },[alterd])

    let add = (movie) => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav = JSON.stringify(fav);
        localStorage.setItem("fav", fav);
        setAlterd(alterd+1);
        
    }
    let remove = (id) => {
        let fav = JSON.parse(localStorage.getItem("fav"));
       fav = fav.filter((m) => { return m.id != id })
        localStorage.setItem("fav", JSON.stringify(fav));
        setAlterd(alterd+1);
    }

    return (
        <div>
            <h1 id="title">{title}</h1>

            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div className="movie">
                            {/*<button onClick={()=>{ handleAddtofav(movie) }}>💟 </button>*/}
                    { favId.includes(movie.id) ?
                            <button className="remove-btn" onClick={() => {remove(movie.id) }}><i class='bx bxs-heart' ></i> </button> :
                            <button className="add-btn" onClick={() => {add(movie) }}><i class='bx bx-heart'></i> </button>}
                            <Link to={`/moviedetails/${movie.id}`}>
                                <img src={movie.poster} alt="poster" width="200px" height="250px" />
                                <h2>{movie.moviename}</h2>
                                <p>{movie.genre}</p>
                            </Link>
                        </div>

                    )
                })}
            </div>

        </div>);
}

export default Movieslist;