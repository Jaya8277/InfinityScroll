import React from 'react'
import './style.css';

const MovieCard = ({myData}) => {
    const {title,body,id} = myData;
  return (
    <div className='card'>
        <div className='card-info'>
            <p className='card-id'> {id}</p>
            <p>{body.substr(0,150)}</p>
            <p>{title.substr(0,15)}</p>
        </div>
    </div>
  )
}

export default MovieCard