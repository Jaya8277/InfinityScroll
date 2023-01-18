import React from 'react'
import MovieCard from './MovieCard'
import './style.css';

const MovieComponents = ({movieInfo}) => {
  return (
    <div className='wrapper'>
        <div className='containercard'>
            <h1>List of cards</h1>
            <div className='grid grid-three-column'>
                {
                    movieInfo.map((curval,id)=> {
                        return <MovieCard key={id} myData={curval}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieComponents