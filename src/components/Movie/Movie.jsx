import React, { useState } from 'react';
import * as S from './Movie.style.jsx';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/"

export default function Movie({title, poster_path,vote_average,overview}) {


  const t={display:'block'};
  const f={display:'none'};

  const [tf, setTf] = useState(false);
  const handleMouseOut = () => {
    setTf(false);
  };

  const handleMouseOver = () => {
    setTf(true);
  };


return (
      <S.Movie_container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <S.more style={tf?t:f}>
              <h4>{title}</h4>
              <span>{overview}</span>
        </S.more>
        <S.m_c_img src={BASE_URL+ poster_path}/>
        <S.movie_info>
          <h4>{title}</h4>
          <span>{vote_average}</span>
            
        </S.movie_info>
      </S.Movie_container>
  )
}