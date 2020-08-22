import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import { Paper }  from '@material-ui/core';
export default props => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data));
    }, [])
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    }
    const styles = {
        paper: {
            width: "30rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem"
        },
        button: {
            width: "100%"
        }
    }
    return (
        <div className='PlayerList'>
        <Paper elevation={3} style={styles.paper}>
        <div>
            <h1>All players:</h1>
            {players.map((player, idx) => {
                return (
                    <p key={idx}>
                       <Link className='players' to={`/players/${player._id}`}>{player.name}, {player.position}, {player.status}</Link>
                       │
                       <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
                    </p>
                )
            })}
        </div>
        </Paper>
        </div>
    )
};
