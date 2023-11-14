import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie.jsx";
import { movies } from "./movieDummy";
import Header from "./components/Movie/Header.jsx"
import Movies from "./pages/Movies.jsx"
import TV from "./pages/TV.jsx"
import Celebrity from "./pages/Celebrity.jsx"
import NotFound from "./pages/NotFound.jsx"
import Home from "./pages/Home.jsx"

function App () {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/tv-program" element={<TV/>}/>
          <Route path="/celeb" element={<Celebrity/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/movies"
          element={
            <div className="app-container">
                  {
                  movies.results.map((item) => {
                    return (
                      <Movie
                      title ={item.title}
                      poster_path={item.poster_path}
                      vote_average={item.vote_average}
                      overview={item.overview}
                      />
                    )})
                  }
            </div>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
