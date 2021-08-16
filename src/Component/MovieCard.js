import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./MovieCard.css"

export default function MovieCard(props) {
    const [hover, setHover] = useState(false);
    const changeHover = (p) => setHover(p);

    return (
        <Link to={`/${props.title}/${props.id}`}>
            <div className="movie-card" onMouseEnter={() => changeHover(true)} onMouseLeave={() => changeHover(false)}>

                <img src={props.posterURL} style={{ width: "100%", height: "100%" }} alt="" />
                {hover && <div className="content" >
                    <h1>Title: {props.title}</h1>
                    <h3>Rate: {props.rating}</h3>
                    
                </div>}
            </div>

        </Link>
    )
}

