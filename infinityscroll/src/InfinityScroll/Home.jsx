import React, { useEffect, useState } from 'react'
import Loding from './Loding';
import MovieComponents from './MovieComponents';

const Home = () => {
    const [card,setCard] = useState([]);
    const [page,setPage] = useState(1);
    const [loding,setLoding] = useState(true);

    const getCardData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const data = await res.json();
        //console.log(data);
        setCard((prev)=> [...prev, ...data]);
        setLoding(false);
    }

    const handleInfiniteScroll= async() =>{
        console.log("scrollHeight"+ document.documentElement.scrollHeight);
        console.log("innerHeight" + window.innerHeight);
        console.log("scrollTop" + document.documentElement.scrollTop);
        try{
          if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
           setLoding(true);
            setPage((prev)=> prev + 1);

          }
            
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=> {
        getCardData();
    }, [page]);
    useEffect(()=> {
        window.addEventListener("scroll",handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
       
    },[]);
  return (
   <>

    <MovieComponents movieInfo={card} />
    {loding &&    <Loding/>}
   </>
  )
}

export default Home