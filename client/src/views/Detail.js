import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [author, setAuthor] = useState({})
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {removeFromDom(authorId)})
    };
    return (
        <div>
            <h1>Author Details:</h1>
            <p>Name: {author.name}</p>
            <p>Quote: {author.quote}</p>
            <button><Link to={"/authors/" + author._id + "/edit"}>Edit</Link></button><br/><br/>
            <button className='delete-author' onClick={(e)=>{deleteAuthor(author._id)}}><Link to={ '/authors' }>Delete</Link></button><br/><br/>
            <button><Link to={ '/authors' }>Home</Link></button>
        </div>
    )
}
