import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Addmovies = () => {
    // create new movie obj
    //send the movie obj to the database

    let navigate = useNavigate();

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let poster = useRef();
    let trailer = useRef();
    let release = useRef();
    let rating = useRef();
    let synopsis = useRef();


    let handleAddNewMovie = (e) => {
        e.preventDefault();

        let newMovie = {
            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            languages: [],
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value
        }
        let options = document.getElementsByName("Lang");
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked == true) {
                newMovie.languages.push(options[i].value)
            }
        }

        fetch("http://localhost:4000/movies",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMovie)
            })
            .then(() => {
                alert("New movie added to database");
                navigate("/");
            })
    }
    return (
        <div className="add-movie">
            <form onSubmit={handleAddNewMovie}>
                <input type="text" placeholder="Movie name" id="movie" ref={moviename} /><br />
                <input type="text" placeholder="Hero name" id="movie" ref={hero} /><br />
                <input type="text" placeholder="Heroien name" id="movie" ref={heroine} /><br />
                <input type="text" placeholder="Director name" id="movie" ref={director} /><br />
                <fieldset id="languages">
                    <legend>Languages</legend>
                    <input type="checkbox" name="Lang" value="kannada" /><label>Kannada</label>
                    <input type="checkbox" name="Lang"  value="tamil" /><label>Tamil</label>
                    <input type="checkbox" name="Lang"  value="telugu" /><label>Telugu</label>
                    <input type="checkbox" name="Lang"  value="english" /><label>English</label>
                    <input type="checkbox" name="Lang"  value="malayalm" /><label>Malayalm</label>
                </fieldset>
                <input type="text" placeholder="Genre" id="genre" ref={genre} /> <br />
                <input type="url" name="" id="image" placeholder="Add image address" ref={poster} /><br />
                <input type="url" placeholder="video address" id="vedios" ref={trailer}/> <br />
               
                <input type="number" id="date" min="1950" max="2024" ref={release} /><br />
                <input type="number" name="" id="rating" min="1" max="10" step="0.1" ref={rating} /><br />
                <textarea name="" id="synopsis" cols="30" rows="10" ref={synopsis}></textarea><br />
                <input type="submit" value="Add Movie" id="submit" />
            </form>
        </div>
    );
}

export default Addmovies;