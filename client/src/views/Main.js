import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
// import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import MainNavbar from '../components/MainNavbar';

export default () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log('Error: ', err))
    }, [])
    // const createPlayer = player => {
    //     axios.post('http://localhost:8000/api/players', player)
    //         .then(res=>{
    //             setPlayers([...players, res.data]);
    //         })
    // }
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    };
    return(
        <div className='main-div'>
            <MainNavbar/>
            {/* <PlayerForm onSubmitProp={createPlayer} initialName='' initialPosition='' initialStatus=''/> */}
            {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>}
        </div>
    );
};


// Updated all the way to Main.js   -   need to update Detail and Update