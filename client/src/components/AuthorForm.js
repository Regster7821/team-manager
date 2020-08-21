import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
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


export default function AuthorForm(props) {
    const { initialName, initialQuote, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [quote, setQuote] = useState(initialQuote);

    const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({name, quote});
    }

    return(
        <div className='author-form'>
        <Paper elevation={3} style={styles.paper}>
            <h1>Create an author</h1>
            <form onSubmit={ onSubmitHandler }>
                <FormControl variant='outlined' style={styles.input}>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text" name='name' onChange = { e => setName(e.target.value) }/>
                </FormControl>
                <FormControl variant='outlined' style={styles.input}>
                    <InputLabel>Quote</InputLabel>
                    <OutlinedInput type="text" name='quote' onChange = { e => setQuote(e.target.value) }/>
                </FormControl><br/>
                <Button type="submit" variant="contained" color="primary">
                        Submit
                </Button>
            </form>
        </Paper> 
        </div>
    )
}