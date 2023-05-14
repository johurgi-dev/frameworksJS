import React from 'react';
import peliculasJSON from './../../assets/movies.json';
import './home.css';
import CardInfo from '../CardInfo/cardinfo';

const Home = () => {
    const peliculas = peliculasJSON.slice(0,5);    

    const listPeliculas = peliculas.map((pelicula, index)=>{
        return <CardInfo key={pelicula.id} pelicula={pelicula}></CardInfo>
    });
    return(
        <>
            <div className='home'>
                <h2>Peliculas</h2>
                <div className='peliculas'>
                    {listPeliculas}
                </div>
            </div>
        </>
    );
}

export default Home;