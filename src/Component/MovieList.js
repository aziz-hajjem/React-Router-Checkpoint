import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import Modal from './Modal'
import "./MovieList.css"




export default function MovieList(props) {
    
    const [filter, setFilter] = useState(false);
    const [title, setTitle] = useState(false)
    const changeFilter = () => setFilter(!filter);
    const changeTitle = () => setTitle(!title);


    
    // useEffect(() => {
    //     console.log(movieList);

    // }, [movieList])
    const filterByRate = () => {
        filter ? props.newList(props.movieList.sort((a, b) => b.rating - a.rating)) : props.newList(props.movieList.sort((a, b) => a.rating - b.rating));
    }
    const filterByTitle = () => {
        title ? props.newList(props.movieList.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))) : props.newList(props.movieList.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)))
    }
    return (



        <>
            <Modal movies={props.movieList} newList={props.newList} ></Modal>
            <div className="btns">
                <button className="filter" onClick={() => { changeFilter(); filterByRate();}}>Filter By rank</button>
                <button className="title" onClick={() => { changeTitle(); filterByTitle() }}>Filter By Title</button>
            </div>
            <div className="list">
                {props.movieList.map(el => <MovieCard title={el.title} youtube={el.embedId} rating={el.rating} description={el.description} posterURL={el.posterURL } id={el.id} />
                )}
            </div>
        </>
    )
}
