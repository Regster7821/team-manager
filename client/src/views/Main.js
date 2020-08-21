import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log('Error: ', err))
    }, [])
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
            })
    }
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };
    return(
        <div className='main-div'>
            <AuthorForm onSubmitProp={createAuthor} initialName='' initialQuote=''/>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    );
};


// Updated all the way to Main.js   -   need to update Detail and Update