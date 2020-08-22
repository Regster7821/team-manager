import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [player, setPlayer] = useState({})
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/players/" + props.id)
            .then(res => setPlayer({
                ...res.data
            }))
    }, [])
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    };
    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => {removeFromDom(playerId)})
    };
    return (
        <div>
            <h1>Player Details:</h1>
            <p>Name: {player.name}</p>
            <p>Position: {player.position}</p>
            <p>Status: {player.status}</p>
            <button><Link to={"/players/" + player._id + "/edit"}>Edit</Link></button><br/><br/>
            <button className='delete-player' onClick={(e)=>{deletePlayer(player._id)}}><Link to={ '/players' }>Delete</Link></button><br/><br/>
            <button><Link to={ '/players' }>Home</Link></button>
        </div>
    )
}
