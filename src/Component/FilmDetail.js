import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'
import { useParams, useHistory } from 'react-router'
import "./filmDetail.css"

export default function FilmDetail(props) {
    const history = useHistory();
    const handleHistory = () => history.push('/');
    const { id } = useParams();
    console.log(history);
    const movie = props.movies.find(el => el.id === id);

    return (



        <div className='film-detail-container'>

            <i class="fas fa-arrow-circle-left" onClick={() => handleHistory()} style={{ fontSize: "3rem" ,cursor:"pointer"}}></i>
            <div className="film-detail-content">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <YoutubeEmbed embedId={`${movie.embedId}`}></YoutubeEmbed>
            </div>


        </div>
    )
}
