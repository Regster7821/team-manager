import React from 'react'
import { Link } from '@reach/router';

export default props => {


    return (
        <div className='main-navbar'>
            <Link className='navbar-item' to='players'>Manage Players</Link>
            │
            <Link className='navbar-item' to='/players/create'>Add Player</Link>
            │
            <Link className='navbar-item' to='players/create'>Manage Player Status</Link>
        </div>
    );
};