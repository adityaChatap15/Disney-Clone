import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results)
      setMoviesList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">

<IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute  ${index_%3==0?'mt-[77px]' :'mt-[150px]'}`} />

      <div ref={elementRef} className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5">
        {moviesList.map((item, index) => (
          <>
           {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item}/>}
          </>
        ))}
      </div>

        <IoChevronForwardOutline  onClick={()=>slideRight(elementRef.current)} className={`text-[50px] text-white p-2 z-10 top-0 right-0  cursor-pointer hidden md:block absolute ${index_%3==0?'mt-[77px]' :'mt-[150px]'}`}/>
      
    </div>
  );
}

export default MovieList;
