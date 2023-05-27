import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Addmovies from "./components/Addmovies";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Moviedetails from "./components/Moviedetails";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Editmovie from "./components/EditMovie";


function App() {
  return (
    //**************Router concepts */
    <BrowserRouter>
            <Navbar/>
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Addmovies" element={<Addmovies/>}/>
                  <Route path="/moviedetails/:id" element={<Moviedetails/>}></Route>{/*Route parameter*/}
                  <Route path="/fav" element={<Favorites/>}></Route>
                  <Route path="/search/:searchword" element={<Search/>}></Route>
                  <Route path="/edit/:id" element={<Editmovie/>}></Route>
            </Routes>
    </BrowserRouter>
    // <div>
    // <Navbar/>
    // <Home/>
    // </div>
  );
}

export default App;
