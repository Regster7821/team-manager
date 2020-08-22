import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import MainNavbar from '../components/MainNavbar'

export default () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
            })
            .catch(err=>console.log('Error: ', err))
    }, [])
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players/create', player)
            .then(res=>{
                setPlayers([...players, res.data]);
            })
    }
    return(
        <div className='main-div'>
            <MainNavbar/>
            <PlayerForm onSubmitProp={createPlayer} initialName='' initialPosition='' initialStatus=''/>
        </div>
    );
};