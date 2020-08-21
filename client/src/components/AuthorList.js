import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import { Paper }  from '@material-ui/core';
export default props => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }
    const styles = {
        paper: {
            width: "20rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem"
        },
        button: {
            width: "100%"
        }
    }
    return (
        <div className='AuthorList'>
        <Paper elevation={3} style={styles.paper}>
        <div>
            <h1>All authors:</h1>
            {authors.map((author, idx) => {
                return (
                    <p key={idx}>
                        <Link className='authors' to={`/authors/${author._id}`}>{author.name}</Link>
                       <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
        </Paper>
        </div>
    )
};
