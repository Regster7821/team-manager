import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { id } = props;
    const [name, setName] = useState();
    const [position, setPosition] = useState();
    const [status, setStatus] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => {
                setName(res.data.name);
                setPosition(res.data.position);
                setStatus(res.data.status);
            })
    }, [])
    const updatePlayer = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/players/' + id + '/edit', {
            name,
            position,
            status
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Player</h1>
            <form onSubmit={updatePlayer}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Position</label><br />
                    <input type='text'
                    name="position"
                    value={position} 
                    onChange={(e) => { setPosition(e.target.value) }} />
                </p>
                <p>
                    <label>Status</label><br />
                    <input type='text'
                    name="status"
                    value={status} 
                    onChange={(e) => { setStatus(e.target.value) }} />
                </p>
                <input type="submit"></input><br /><br />
                <button><Link to={ '/players' }>Home</Link></button>
            </form>
        </div>
    )
}
