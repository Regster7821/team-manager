import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { id } = props;
    const [name, setName] = useState();
    const [quote, setQuote] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
                setQuote(res.data.quote);
            })
    }, [])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id + '/edit', {
            name,
            quote
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Quote</label><br />
                    <input type='text'
                    name="quote"
                    value={quote} 
                    onChange={(e) => { setQuote(e.target.value) }} />
                </p>
                <input type="submit"></input><br /><br />
                <button><Link to={ '/authors' }>Home</Link></button>
            </form>
        </div>
    )
}
